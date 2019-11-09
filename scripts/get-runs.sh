#!/bin/bash
set -e

# Running xMacroscope Server Instance URL
SERVER='http://localhost:4000'

# GraphQL Query to run. Current query extracts the 'last 5000' Runs
QUERY='{"query":"query {Runs(lastX: 5000) {id start end person {id icon color ageGroup opponent shoes height zipCode state latitude longitude}}}"}'

# Use curl to do the query
curl "${SERVER}/graphql" \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connection: keep-alive' \
  -H 'DNT: 1' \
  -H "Origin: ${SERVER}" \
  --data-binary "$QUERY" \
  --compressed  \
  > $1.json

# Flatten the raw json received from the GraphQL server
node ./scripts/flatten-runs.js $1.json $1
rm -f $1.json # clean up our mess
