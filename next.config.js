const chokidar = require('chokidar')
const { exec } = require('child_process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  webpack: (config, { dev, isServer, nextRuntime }) => {
    if (dev && isServer && nextRuntime === 'nodejs') {
      console.log('Running in dev mode. Watching folders')

      config.plugins.push(
        (nextConfig) => {
          chokidar.watch('public/images/*.(jpg|JPG|jpeg|JPEG|png|PNG)', { persistent: true }).on('add', () => {
            exec('pnpm images')
          })

          return nextConfig
        }
      )
    }

    return config
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/en',
          has: [
            {
              type: 'host',
              value: 'en.franbosquet.com'
            }
          ]
        },
        {
          source: '/posts/:path',
          destination: '/en/posts/:path',
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
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)