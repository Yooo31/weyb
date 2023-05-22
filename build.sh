bash image_resize.sh

bundle exec jekyll build --trace --config _config.yml

sass src/_sass/style.scss:web/assets/main.css
yui-compressor web/assets/main.css > web/assets/main.min.css
