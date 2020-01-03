cd originals
magick convert *.jpg -resize 20% ../fulls/%%01d.jpg
magick convert *.jpg -resize 20% ../thumbnails/%%01d.jpg

cd ../thumbnails
magick mogrify -strip -interlace Plane -quality 70% *.jpg