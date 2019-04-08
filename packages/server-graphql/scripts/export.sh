#!/bin/sh
set -e

if [ $# -eq 0 ]
  then
    echo "DB location required."
    exit 1
fi

if [ ! -f $1 ]
  then
    echo "DB file does not exist."
    exit 1
fi

DB_LOCATION=$1
DATE=`date +"%Y-%m-%d-%T"`
LOCATION='smm'
EXPORT_DIR="export-${DATE}-${LOCATION}"

mkdir -p ../tmp
mkdir ../tmp/$EXPORT_DIR

# Output organization so the other side knows who we are
echo $LOCATION > ../tmp/$EXPORT_DIR/org

#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Messages;" >> tmp/$EXPORT_DIR/messages.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM People;" >> tmp/$EXPORT_DIR/people.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Performances;" >> tmp/$EXPORT_DIR/performances.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Runs;" >> tmp/$EXPORT_DIR/runs.sql

# Limiting the dump to specific tables
sqlite3 $DB_LOCATION ".dump 'People'" ".dump 'Runs'" > ../tmp/$EXPORT_DIR/dump.sql
sqlite3 $DB_LOCATION ".schema" > ../tmp/$EXPORT_DIR/schema.sql

# Output the diff of the dump and the schema to get rid of the CREATE statements
grep -vx -f ../tmp/$EXPORT_DIR/schema.sql ../tmp/$EXPORT_DIR/dump.sql > ../tmp/$EXPORT_DIR/data.sql

# Get rid of SequelizeMeta table
# sed -i '' '/SequelizeMeta/d' $TEMP_DIR/data.sql

# Cleanup the TEMP_DIR to tar
rm -f ../tmp/$EXPORT_DIR/dump.sql ../tmp/$EXPORT_DIR/schema.sql

tar -zcf ../tmp/$EXPORT_DIR.tar.gz -C ../tmp/$EXPORT_DIR .
rm -rf ../tmp/$EXPORT_DIR

# TODO: rsync to deployment server
