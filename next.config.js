// Next images
const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

// Next bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
