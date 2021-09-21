shopt -s expand_aliases

# Set global configuration
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH="./src"
export GPG_TTY=$(tty)
export THIS=$(cd $(dirname "${BASH_SOURCE[0]}"); pwd -P)

# Load environment
source env.sh

# Shorthands and configuration options
VERSION="2020-10-30"

SRC="$THIS/src"
ORIG="$THIS/raw-data/original"
OUT="$THIS/raw-data/derived/$VERSION"

DB="$OUT/a2agc.db"
EDB="$OUT/a2agc.db.e"

DATA_SOURCES="$ORIG/box-health/[Box Health] Final Datasets"

SCHEMA_DIR="$THIS/../website/src/assets/schema"
SCHEMA_NAME=A2AGC
SCHEMA="$SCHEMA_DIR/$SCHEMA_NAME.public.xml"

COLUMN_DISTRIBUTION_OVERRIDES=./column-distribution-overrides.yml
AGGREGATE_DATA="$OUT/site-data/aggregate-table-data.json"

BASE_URL="https://demo.cns.iu.edu/a2agc-dataset/"

# Check required configuration
# _=${VARIABLE:?"Error message"}

# Set defaults
# _=${VARIABLE:=default_value} OR
# _=${VARIABLE=}

# Create aliases
alias sqlite="sqlcipher $DB"
alias sqlite3="sqlcipher"

# Create directories
mkdir -p "$ORIG" "$OUT/site-data"