#!/bin/bash

path="$1"

if [ -e "$path" ]; then
    echo "true"
else
    echo "false"
fi
