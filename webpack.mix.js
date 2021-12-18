const path = require('path');
const mix = require('laravel-mix');
const cssImport = require('postcss-import');
const cssNesting = require('postcss-nesting');
const { IgnorePlugin } = require('webpack');

mix.webpackConfig((webpack) => {
  return {
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
      alias: {
        'vue$': 'vue/dist/vue.esm-bundler.js',
      },
    },
    plugins: [
      new IgnorePlugin({
        resourceRegExp: /Images/,
      }),
    ],
  };
});

mix.alias({
  'src': path.resolve('src'),
});

mix.setPublicPath('dist');

mix.js('src/theme.js', 'js');
mix.vue({ version: 3, runtimeOnly: true });

mix.postCss('src/theme.css', 'css', [
  cssImport(),
  cssNesting(),
  require('tailwindcss')
]);

mix.copyDirectory('resources/images', 'dist/images');

mix.extract();

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
