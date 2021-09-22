#!/bin/bash
source constants.sh
set -ev

DB=$SRC/sciencefest-2019.sqlite
SCRIPT=$SRC/queries/sciencefest-2019.sql
OUT_CSV=$OUT/sciencefest-2019.csv

sqlite3 -header -csv $DB < $SCRIPT > $OUT_CSV
