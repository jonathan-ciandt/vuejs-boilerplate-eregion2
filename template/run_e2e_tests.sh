#!/bin/bash

set -e

echo 'Installing dependencies ...'
{
    echo "install cypress dependencies..." 
    npm ci 

    echo 'Run End2End Test' 
    node_modules/.bin/cypress run

} || {
  echo "Error when try to run End2End test"
  exit 1
}

# killall node

echo 'Test finished'
