/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path',
        destination: '/en/:path',
        has: [
          {
            type: 'host',
            value: 'en.franbosquet.com'
          }
        ]
      }
    ]
  }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)