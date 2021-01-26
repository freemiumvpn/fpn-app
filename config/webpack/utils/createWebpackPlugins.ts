import path from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { EnvironmentPlugin, Plugin } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import DotEnv from 'dotenv-webpack'

import { WebpackEnv, WebpackPaths } from '../types'

const createWebpackPlugins = (
  env: WebpackEnv,
  paths: WebpackPaths
): Plugin[] => {
  const plugins = [
    new EnvironmentPlugin(env),
    new DotEnv({
      safe: true, // load '.env.example' to verify
      allowEmptyValues: false,
      silent: false,
    }),

    /**
     * Provide HTML template
     */
    new HtmlWebpackPlugin({
      template: path.join(paths.root, 'assets', 'index.ejs'),
      GIT_SHA: env.GIT_SHA,
    }),
    /**
     * Add assets to dist
     */
    new CopyWebpackPlugin([
      {
        from: path.join(paths.root, 'assets'),
        to: path.join(paths.root, 'dist', 'assets'),
      },
    ]),
  ]

  if (env.analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true,
      })
    )
  }

  if (env.isDevelopment()) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}

export default createWebpackPlugins
