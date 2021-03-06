import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const config = {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      external: ['react', 'react-dom', 'styled-components'],
    },
  ],
  plugins: [
    autoExternal(),
    peerDepsExternal(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    localResolve(),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement',
        ],
      },
    }),
    filesize(),
  ],
};

export default config;
