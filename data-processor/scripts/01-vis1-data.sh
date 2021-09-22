#!/bin/bash
source constants.sh
set -ev

SRC_DIR=../assets/visualizations/vis1
OUT_DIR=${OUT}/site-data/vis2-data

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${DB} < ../website/src/assets/pages/vis2-age-and-gender/data.sql > ${OUT_DIR}/death-counts.csv

python3 ${SRC_DIR}/census_data.py ${SRC_DIR}/census-data -o ${OUT_DIR}/census-counts.csv
