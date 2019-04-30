#!/bin/sh
set -e

echo "Running export cron job..."

# Check to see we've provided both required arguments (db location, pgpass)
if [ ! $# -eq 2 ]
  then
    echo "DB location and PGPASS required."
    exit 1
fi

# Check to see that the db we've provided actually exists
if [ ! -f $1 ]
  then
    echo "DB file does not exist."
    exit 1
fi

# Check to see that the PG_PASS is actually defined
if [ -z "$2" ]
  then
    echo "PG_PASS required."
    exit 1
fi

# We need the actual db location on disk because we're gonna change directories
PWD=$(pwd)
DB_LOCATION=$PWD/$1
DB_PASS=$2

# This allows us to use fixed relative paths ensuring we're acting relative to the scripts directory
SCRIPTDIR="$(dirname "$0")"
cd "$SCRIPTDIR"

# We should already have a logs and tmp directory, but you never know...
mkdir -p ../logs
mkdir -p ../tmp

DATE=`date +"%Y-%m-%d-%T"`
EXPORT_DIR=../tmp/export-$DATE
mkdir $EXPORT_DIR

LOG_FILE=../logs/export-$DATE.log
echo "-------------------- Export ${DATE} ----------------------" >> $LOG_FILE

# Telling psql to look at specific schema
#echo "SET search_path TO test;" > $EXPORT_DIR/data.sql

# Limiting the dump to specific tables
sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Runs;" >> $EXPORT_DIR/Runs.sql
sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM People;" >> $EXPORT_DIR/People.sql

for query in $EXPORT_DIR/*.sql ; do
  TABLENAME="$(basename $query .sql)"
  echo "BEGIN TRANSACTION;" >> $EXPORT_DIR/data.sql
  COLUMN_ROW=true
  while read line ; do
    VALUES=
    QUERY="INSERT INTO ${TABLENAME} ("
    IFS='|' read -r -a array <<< "$line"

    for col in "${array[@]}" ; do
      if [ "$COLUMN_ROW" = true ] ; then
        VALUES+="$col,"
      else
        if [ -z "$col" ] ; then
          VALUES+="NULL,"
        else
          VALUES+="'$col',"
        fi
      fi
    done

    if [ "$COLUMN_ROW" = true ] ; then
      COLUMN_ROW=false
      COLUMNS=$VALUES
    else
      QUERY+=$COLUMNS") VALUES ("
      QUERY+=$VALUES");"

      echo "$QUERY" >> $EXPORT_DIR/data.sql
    fi
  done < "$query"
  echo "COMMIT;" >> $EXPORT_DIR/data.sql
done

#sqlite3 $DB_LOCATION ".dump 'People'" ".dump 'Runs'" > $EXPORT_DIR/dump.sql
#sqlite3 $DB_LOCATION ".schema" > $EXPORT_DIR/schema.sql

# Output the diff of the dump and the schema to get rid of the CREATE statements
#grep -vx -f $EXPORT_DIR/schema.sql $EXPORT_DIR/dump.sql >> $EXPORT_DIR/data.sql

# Remove PRAGMA lines because psql has no equivalent
#sed -i '' '/PRAGMA/d' $EXPORT_DIR/data.sql

# Setup psql arguments
DBHOST=psql-3.ctrcns5uid16.us-east-2.rds.amazonaws.com
DBUSER=xmacroscope_admin
DBNAME=xmacroscope_dev_02

PGPASSWORD=$DB_PASS psql -h $DBHOST -U $DBUSER -d $DBNAME < $EXPORT_DIR/data.sql 1>>$LOG_FILE 2>>$LOG_FILE

# We should add some sort of word finding to see if we have any errors
echo "OPERATION SUCCESS" | tee -a $LOG_FILE

# TODO: probably should send an email to some sort of logging service to report as successful

# Remove the EXPORT_DIR
rm -r $EXPORT_DIR
