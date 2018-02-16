#!/bin/bash

ng build --prod --aot --output-hashing=none --sourcemaps --base-href /xmacroscope/

cp -r dist/* ../../../xmacroscope-release/
