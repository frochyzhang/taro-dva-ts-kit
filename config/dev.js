module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    proxy:{
      '/api':{
        target: 'http://127.0.0.1:9527',
        pathRewrite: {'^/api': '/api'},
        changeOrigin: true
      }
    }
  }
}
