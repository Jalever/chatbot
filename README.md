## chatbot

## dependencies
- webpack webpack-cli
- webpack-dev-server
- react react-dom @types/react @types/react-dom
- babel-core babel-loader babel-preset-env babel-preset-react
- clean-webpack-loader html-webpack-loader
- typescript awesome-typescript-loader source-map-loader
- style-loader css-loader node-sass sass-loader
- @typed/node-sass

#### `.babelrc` file
```js
{
    "presets": ["env", "react"]
}
```
> npx babel-upgrade --write --install

#### index.d.ts
```typescript
declare module '*.scss';
```

#### webpack.config.js
```js
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        host: "localhost",
        port: "8802",
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },{
            test: /\.scss$/,
            loader: [{
                loader: "style-loader"
            },{
                loader: "css-loader",
                options: {
                    modules: true,
                    sourceMap: true,
                    localIdentName: "[local]___[hash:base64:5]"
                }
            },{
                loader: "sass-loader"
            }]
        }, {
            test: /\.(svg|gif|png|jpg)$/,
            use: ["file-loader"]
        }, {
            test: /\.tsx?$/,
            use: "awesome-typescript-loader"
        },{
            enforce: "pre",
            test: /\.js$/,
            use: "source-map-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Chatbot",
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
        extensions: [".tsx", ".ts", ".js"]
    }
};
```

#### tsconfig.js
```js
{
    "compilerOptions": {
        "outDir": "./dist/",
        "jsx": "react",
        "sourceMap": true,
        "allowJs": true,
        "target": "es5",
        "module": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node"
    },
    "include": [
        "./src/**/*"
    ]
}
```
