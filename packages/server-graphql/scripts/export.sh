#!/bin/sh
set -e

echo "Running export cron job..."

# Check to see we've provided an argument for the db
if [ $# -eq 0 ]
  then
    echo "DB location required."
    exit 1
fi

# Check to see that the db we've provided actually exists
if [ ! -f $1 ]
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

# TODO: pull organization out of database or maybe from .env?

DATE=`date +"%Y-%m-%d-%T"`
LOCATION='smm'
EXPORT_DIR="export-${DATE}-${LOCATION}"

# We should already have a tmp directory, but you never know...
mkdir -p ../tmp
mkdir ../tmp/$EXPORT_DIR

# Output location so the other side knows who we are
echo $LOCATION > ../tmp/$EXPORT_DIR/org

#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Messages;" >> tmp/$EXPORT_DIR/messages.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM People;" >> tmp/$EXPORT_DIR/people.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Performances;" >> tmp/$EXPORT_DIR/performances.sql
#sqlite3 $DB_LOCATION ".headers ON" "SELECT * FROM Runs;" >> tmp/$EXPORT_DIR/runs.sql

# Get rid of SequelizeMeta table
# sed -i '' '/SequelizeMeta/d' $TEMP_DIR/data.sql

# Limiting the dump to specific tables
sqlite3 $DB_LOCATION ".dump 'People'" ".dump 'Runs'" > ../tmp/$EXPORT_DIR/dump.sql
sqlite3 $DB_LOCATION ".schema" > ../tmp/$EXPORT_DIR/schema.sql

# Output the diff of the dump and the schema to get rid of the CREATE statements
grep -vx -f ../tmp/$EXPORT_DIR/schema.sql ../tmp/$EXPORT_DIR/dump.sql > ../tmp/$EXPORT_DIR/data.sql

# Cleanup the TEMP_DIR to tar
rm -f ../tmp/$EXPORT_DIR/dump.sql
rm -f ../tmp/$EXPORT_DIR/schema.sql

# Tar up everything
tar -zcf ../tmp/$EXPORT_DIR.tar.gz -C ../tmp/$EXPORT_DIR .

# TODO: in the distant future, we should encrypt our tarred file to make sure nothing get compromised

rm -r ../tmp/$EXPORT_DIR

# TODO: pushing to deployment server
# probably should end up using curl to push future jwt token integration instead of rsync

# https://medium.com/@nieldw/using-curl-to-authenticate-with-jwt-bearer-tokens-55b7fac506bd
# curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" https://{hostname}/api/myresource

# Let someone know we were successful
echo "OPERATION SUCCESS"

# TODO: probably should send an email to some sort of logging service to report as successful
