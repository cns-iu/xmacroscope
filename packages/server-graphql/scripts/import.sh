#!/bin/sh
set -e

echo "Running import cron job..."

# Check to see we've provided an argument for the db
if [ $# -eq 0 ] ;
  then
    echo "DB location required."
    exit 1
fi

# Check to see that the db we've provided actually exists
if [ ! -f $1 ] ;
  then
    echo "DB file does not exist."
    exit 1
fi

# We need the actual location of db on disk because we're gonna change directories
PWD=$(pwd)
DB_LOCATION=$PWD/$1

# This allows us to use fixed relative paths ensuring we're acting relative to the scripts directory
SCRIPTDIR="$(dirname "$0")"
cd "$SCRIPTDIR"

# Let's get a list of everything we need to import sorted
FILES=$(find ../tmp -iname '*.gz' | sort)

LOG_DIR=../logs
TEMP_DIR=../tmp/import

# Should already exist, but you never know
mkdir -p $LOG_DIR

for FILE in $FILES
do
  REQUIRED_FILES_PRESENT=true
  echo "Importing $FILE"

  mkdir -p $TEMP_DIR
  tar -zxf $FILE -C $TEMP_DIR

  DATE=`date +"%Y-%m-%d-%T"`
  LOG_FILE=$LOG_DIR/import-$DATE.log

  echo "-------------------- Importing $FILE ----------------------" >> $LOG_DIR/$LOG_FILE

  # Check to make sure 'data.sql' exists
  if [ ! -f "$TEMP_DIR/data.sql" ] ;
    then
      REQUIRED_FILES_PRESENT=false
      echo "Couldn't find 'data.sql'" >> $LOG_DIR/$LOG_FILE
  fi

  # Check to make sure 'org' exists
  if [ ! -f "$TEMP_DIR"/org ] ;
    then
      REQUIRED_FILES_PRESENT=false
      echo "Couldn't find 'org'" >> $LOG_DIR/$LOG_FILE
  fi

  # If either check fails above, let's skip the import of that file altogether
  if ! "$REQUIRED_FILES_PRESENT" ;
    then
      echo "Skipping import for $FILE" >> $LOG_DIR/$LOG_FILE
      echo "OPERATION FAILED\n" >> $LOG_DIR/$LOG_FILE

      # Remove the untarred directory but let's keep the original tarred file around
      rm -r $TEMP_DIR

      # TODO: we should move the failed $FILE to new directory so that we don't try to reimport?
      # TODO: probably should send an email out to notify us that something is up

      continue
  fi

  ORG=$(cat "$TEMP_DIR/org")

  echo "FILE: $FILE" >> $LOG_DIR/$LOG_FILE
  echo "ORG: $ORG\n" >> $LOG_DIR/$LOG_FILE
  echo "Opening sqlite..." >> $LOG_DIR/$LOG_FILE
  sqlite3 $DB_LOCATION < $TEMP_DIR/data.sql 1>>$LOG_DIR/$LOG_FILE 2>>$LOG_DIR/$LOG_FILE || echo "Closing sqlite..." >> $LOG_DIR/$LOG_FILE

  # Keeping this here for the moment in case we decide to do
  # something more granular than the sqlite cli can give us

  #for query in export-2019-04-03-15:53:33-smm/*.sql ; do
  #  COLUMN_ROW=true
  #
  #  while read line ; do
  #    VALUES=
  #    QUERY="INSERT INTO table ("
  #    IFS='|' read -r -a array <<< "$line"
  #
  #    for col in "${array[@]}" ; do
  #      VALUES+="'$col',"
  #    done
  #
  #    if [ "$COLUMN_ROW" = true ] ; then
  #      COLUMN_ROW=false
  #      COLUMNS=$VALUES
  #    else
  #      QUERY+=$COLUMNS") VALUES ("
  #      QUERY+=$VALUES");"
  #
  #      echo "$QUERY" >> import.sql
  #    fi
  #  done < "$query"
  #done

  # Clean up the mess of dirs and files we've made
  echo "Cleaning up..." >> $LOG_DIR/$LOG_FILE
  rm -r $TEMP_DIR
  rm $FILE

  # Let someone know it was a success
  echo "OPERATION SUCCESS\n" >> $LOG_DIR/$LOG_FILE

  # TODO: probably should send an email to some sort of logging service to report as successful

done
