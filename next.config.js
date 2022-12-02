/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'xsgames.co', 'images.unsplash.com']
  },
  redirects: [
    {
      source: '/admin-strapi',
      destination: 'https://strapi-production-d105.up.railway.app/admin',
      statusCode: 301
    }
  ]
}

module.exports = nextConfig
