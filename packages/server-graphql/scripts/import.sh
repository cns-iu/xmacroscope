#!/bin/sh
set -e

if [ ! $# -eq 2 ]
  then
    echo "Arguments required (DB file, import file)"
    exit 1
fi

if [ ! -f $1 ]
  then
    echo "DB file does not exist."
    exit 1
fi

if [ ! -f $2 ]
  then
    echo "Import file does not exist."
    exit 1
fi

DB_LOCATION=$1
TEMP_FILE=$2
LOG_DIR=../logs

mkdir -p $LOG_DIR
tar -zxf $TEMP_FILE
TEMP_DIR=${TEMP_FILE%%.*}
ORG=$(cat "$TEMP_DIR/org")
DATE=`date +"%Y-%m-%d-%T"`
LOG_FILE=$LOG_DIR/import-$DATE-$ORG.log

echo "------- Import from $ORG - $DATE -------\n" > $LOG_FILE
echo "Opening sqlite..."
sqlite3 $DB_LOCATION < $TEMP_DIR/data.sql 1>>$LOG_FILE 2>>$LOG_FILE || echo "Closing sqlite..."

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

rm -rf $TEMP_DIR $TEMP_FILE
