#!/bin/bash
source constants.sh
set -ev

SRC_DIR=../../packages/site-visualizations/src/assets/data
OUT_DIR=${OUT}/site-data/vis1-data

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${THIS} < ../packages/site-visualizations/src/assets/pages/vis-1-age-time-heatmap/data.sql > ${OUT_DIR}/makevention-2018.csv
