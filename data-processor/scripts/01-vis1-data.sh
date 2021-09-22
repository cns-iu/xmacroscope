#!/bin/bash
source constants.sh
set -ev

SRC_DIR=../../packages/site-visualizations/src/assets/data
OUT_DIR=${OUT}/site-data/vis1-data

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${DB} < ../packages/site-visualizations/src/assets/pages/vis-1-age-time-heatmap/data.sql > ${OUT_DIR}/data-combined.csv

python3 ${SRC_DIR}/census_data.py ${SRC_DIR}/census-data -o ${OUT_DIR}/census-counts.csv
