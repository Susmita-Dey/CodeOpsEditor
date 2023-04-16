/** @type {import('next').NextConfig} */

// const webpack = require('webpack')

// const { parsed: myEnv } = require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  },
  // webpack(config) {
  //   config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
  //   return config
  // }
}

module.exports = nextConfig
