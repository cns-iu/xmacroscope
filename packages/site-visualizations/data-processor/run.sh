#!/bin/bash
set -e
export THIS=$(cd $(dirname "${BASH_SOURCE[0]}"); pwd -P)
source $THIS/constants.sh

echo Run started on $(date)...
echo
for f in $THIS/scripts/??-*.sh
do
  echo Running $f...
  time bash $f
  echo
done
