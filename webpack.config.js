import webpack from 'webpack'

process.env.NODE_ENV = process.env.NODE_ENV || 'development' // eslint-disable-line

export default (entry = './src/index.js', filename = 'bundle.js') =>
  ({
    devtool: 'source-map',
    entry: [
      'react-hot-loader/patch',
      entry,
    ],
    output: {
      path: __dirname, // eslint-disable-line
      filename,
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.html/, loader: 'html-loader' },
        { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
        { test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=dist/fonts/[name].[ext]' },
      ],
    },
  })
