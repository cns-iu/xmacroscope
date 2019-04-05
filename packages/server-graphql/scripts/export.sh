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
TEMP_DIR="export-${DATE}-${LOCATION}"

mkdir $TEMP_DIR

# Output organization so the other side knows who we are
echo $LOCATION > $TEMP_DIR/org

#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Messages;" >> $TEMP_DIR/messages.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM People;" >> $TEMP_DIR/people.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Performances;" >> $TEMP_DIR/performances.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Runs;" >> $TEMP_DIR/runs.sql

# Limiting the dump to specific tables
sqlite3 $DB_LOCATION ".dump 'People'" ".dump 'Runs'" > $TEMP_DIR/dump.sql
sqlite3 $DB_LOCATION ".schema" > $TEMP_DIR/schema.sql

# Output the diff of the dump and the schema to get rid of the CREATE statements
grep -vx -f $TEMP_DIR/schema.sql $TEMP_DIR/dump.sql > $TEMP_DIR/data.sql

# Get rid of SequelizeMeta table
# sed -i '' '/SequelizeMeta/d' $TEMP_DIR/data.sql

# Cleanup the TEMP_DIR to tar
rm -f $TEMP_DIR/dump.sql $TEMP_DIR/schema.sql

tar -zcf $TEMP_DIR.tar.gz $TEMP_DIR
rm -rf $TEMP_DIR
