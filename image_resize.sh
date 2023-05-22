#!/bin/bash

PATH="src/assets/images/blog/"

for FOLDER in "$PATH"/*
do
  for FILE in "$FOLDER"/*
  do
    WIDTH=$(/usr/bin/identify -format "%w" "$FILE")
    if [ "$WIDTH" -gt 600 ]; then
      /usr/bin/convert "$FILE" -resize 600 "$FILE"
    fi
  done
done

echo "Blog picture's are converted !"
