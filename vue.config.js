module.exports = {
    lintOnSave: false,
    publicPath: "./",
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.vikingship.xyz/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}