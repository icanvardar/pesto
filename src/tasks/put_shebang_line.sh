#!/bin/bash

# Check if the script has necessary permissions
# chmod u+r+x path_to_file/shebang-line.sh
if [ ! -x "$0" ]; then
    echo "Error: You need to give execute permission to $0"
    exit 1
fi

# Check if argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

# Check if the file exists
if [ -f "$1" ]; then
    # Prepend '#!/usr/bin/env node' to the file
    sed -i '1i #!/usr/bin/env node' "$1"
    echo "Added '#!/usr/bin/env node' to the beginning of $1"
else
    echo "Error: $1 does not exist. Please build the project first!"
    exit 1
fi
