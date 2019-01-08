/* eslint-env node */
'use strict';

const react = require('broccoli-react');

module.exports = {
  name: 'ember-cli-react',

  preprocessTree: function(type, tree) {
    if (type === 'js') {
      tree = react(tree, {
        transform: { es6module: true },
        babelOptions: {
          plugins: [
            'babel-plugin-macros',
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            [
              '@babel/plugin-proposal-object-rest-spread',
              { useBuiltIns: true },
            ],
          ],
        },
      });
    }

    return tree;
  },

  options: {
    autoImport: {
      devtool: 'inline-source-map',
    },
  },
};
