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
VERSION="2021-09-22"

SRC="$THIS/src"
ORIG="$THIS/raw-data/original"
OUT="$THIS/raw-data/derived/$VERSION"

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