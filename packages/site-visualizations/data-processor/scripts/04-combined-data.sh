#!/bin/bash
source constants.sh
set -ev

pushd $OUT
  cat makevention-2018.csv > combined-data.csv
  tail -n +2 makevention-2019.csv >> combined-data.csv
  tail -n +2 sciencefest-2019.csv >> combined-data.csv
popd
