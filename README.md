# vue-npm

CLIs:

npm init -y
npm install webpack --save-dev
npm install --save-dev babel-loader babel-core
touch .babelrc
echo {"presets": ["es2015"]} > .babelrc
npm install babel-preset-es2015 --save-dev
npm install --save-dev vue
npm install vue-resource --save-dev

npm install\
  webpack webpack-dev-server\
  vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api\
  babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015\
  babel-runtime\
  --save-dev
