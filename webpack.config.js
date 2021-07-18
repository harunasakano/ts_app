const path = require('path');
module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true
    },
    // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
                // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}