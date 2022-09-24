/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media-exp1.licdn.com", "lh3.googleusercontent.com"], 
  },
  swcMinify: true,
}

module.exports = nextConfig
