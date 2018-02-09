#!/bin/bash

ng build --prod --aot --output-hashing=none --sourcemaps --base-href /aisl/

cp -r dist/* ../../../aisl-release/
