#!/bin/sh

#
# This init file is used by docker
# in order to dynamically inject variables
#

node build/writeEnvFile.js
mv env.js dist/env.js
