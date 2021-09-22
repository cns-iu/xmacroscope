shopt -s expand_aliases

# Set global configuration
export THIS=$(cd $(dirname "${BASH_SOURCE[0]}"); pwd -P)

export SRC=$THIS/../src/assets/data
export OUT=$THIS/../src/assets/generated
