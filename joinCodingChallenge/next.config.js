/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['m.media-amazon.com', 'files.bikeindex.org'] },
  env: {
    customKey: 'my-value',
    access_token: ''
  }
}

module.exports = nextConfig

