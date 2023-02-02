/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'http://localhost:3000/',
    //     port: '',
    //     pathname: ''
    //   }
    // ]
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
