import path from 'path'

import { Configuration } from 'webpack'

import createEnvVars, { createEnvFile } from '../../env/createEnvVars'

import jsRule from './rules/jsRules'
import cssRule from './rules/cssRule'
import createWebpackEnv from './utils/createWebpackEnv'
import createWebpackPlugins from './utils/createWebpackPlugins'
import createWebpackPaths from './utils/createWebpackPaths'
import { WebpackArgs } from './types'
import createWebpackMinimizer from './utils/createWebpackMinimizer'

const PATH_ROOT = path.resolve(__dirname, '..', '..')

const createWebpackConfig = (args: WebpackArgs): Configuration => {
  const env = createWebpackEnv(args)
  const paths = createWebpackPaths(PATH_ROOT)

  return {
    mode: env.isProduction() ? 'production' : 'development',
    entry: paths.src,
    output: {
      chunkFilename: 'chunk.[name].[contenthash].js',
      path: paths.build,
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    module: {
      rules: [jsRule, cssRule],
    },
    plugins: createWebpackPlugins(env, paths),
    devtool: env.isProduction() ? 'source-map' : 'cheap-eval-source-map',
    cache: env.isProduction() ? false : true,
    optimization: {
      minimize: env.isProduction(),
      minimizer: createWebpackMinimizer(env),
      splitChunks: {
        chunks: 'initial',
        cacheGroups: {
          vendors: false,
          default: false,
        },
      },
    },
    ...(env.isDevelopment() && {
      devServer: {
        compress: true,
        contentBase: paths.src,
        hot: true,
        port: 3000,
        historyApiFallback: true,
        overlay: {
          warnings: true,
          errors: true,
        },
        before: (app): void => {
          app.get('/env.js', (_, resp) => {
            const envVars = createEnvVars(paths.root)
            resp.send(createEnvFile(envVars))
          })
        },
      },
    }),
  }
}

export default createWebpackConfig
