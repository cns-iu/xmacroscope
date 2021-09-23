#!/bin/bash
source constants.sh
set -ev

DB=$SRC/makevention-2019.sqlite
SCRIPT=$SRC/queries/makevention-2019.sql
OUT_CSV=$OUT/makevention-2019.csv

sqlite3 -header -csv $DB < $SCRIPT > $OUT_CSV
