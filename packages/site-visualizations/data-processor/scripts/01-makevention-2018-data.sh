#!/bin/bash
source constants.sh
set -ev

DB=$SRC/makevention-2018.sqlite
SCRIPT=$SRC/queries/makevention-2018.sql
OUT_CSV=$OUT/makevention-2018.csv

sqlite3 -header -csv $DB < $SCRIPT > $OUT_CSV
