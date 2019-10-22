
const withCSS = require('@zeit/next-css')

module.exports = {
    webpack: (config, { dev }) => {
      config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] });
      return config;
    }
  }

module.exports = withCSS({

})

const withImages = require('next-images')
module.exports = withImages()



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})