/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path',
          has: [
            {
              type: 'host',
              value: 'en.franbosquet.com'
            }
          ],
          destination: '/en/:path'
        }
      ]
    }
  }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)