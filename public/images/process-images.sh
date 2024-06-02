rm -f "$(dirname "$0")"/*.Identifier

# Clean up a file name image_sizes.json
echo "{" > "$(dirname "$0")/image_sizes.json"

# Loop through all files in the current directory
for file in $(find "$(dirname "$0")" -type f ! -name "*.webp" ! -name "*.sh" ! -name "*.json")
do
    # Use cwebp to convert the file to webp format
    cwebp -q 80 "$file" -o "${file%.*}.webp"

    # Delete the original file
    rm "$file"
done

# Loop through all webp files in the current directory
for file in "$(dirname "$0")"/*.webp
do
  width=$(identify -format "%w" "${file%.*}.webp")

  # If the width is larger than 700px, resize the image
  if [ $width -gt 700 ]
  then
      mogrify -resize 700x "${file%.*}.webp"
  fi

  base=$(basename "$file")

  # Read the height and width of the resized image
  width=$(identify -format "%w" "${file%.*}.webp")
  height=$(identify -format "%h" "${file%.*}.webp")

  # Append the image size to the image_sizes.json file
  echo "\"${base%.*}\": {\"width\": $width, \"height\": $height}," >> "$(dirname "$0")/image_sizes.json"
  
  # Create a placeholder image
  placeholderPath=$(dirname "$0")/placeholder/${base}
  
  if [ ! -f "$placeholderPath" ]; then
    echo "Creating placeholder for $file"
    convert "${file%.*}.webp" -blur 0x8 -quality 10 -resize 10x "$placeholderPath"
  fi 
done

# Remove the last comma from the image_sizes.json file and close the JSON object
sed -i '$ s/,$//' "$(dirname "$0")/image_sizes.json"
echo "}" >> "$(dirname "$0")/image_sizes.json"
