module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tpi-dacs-frontend/'
        : '/'
}