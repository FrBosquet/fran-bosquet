rm -f "$(dirname "$0")"/*.Identifier

for file in $(find "$(dirname "$0")" -type f ! -name "*.webp" ! -name "*.sh")
do
    # Use cwebp to convert the file to webp format
    cwebp -q 80 "$file" -o "${file%.*}.webp"

    # Delete the original file
    rm "$file"
done

for file in $(find "$(dirname "$0")" -type f -name "*.webp")
do
  width=$(identify -format "%w" "${file%.*}.webp")

  # If the width is larger than 700px, resize the image
  if [ $width -gt 700 ]
  then
      mogrify -resize 700x "${file%.*}.webp"
  fi
done