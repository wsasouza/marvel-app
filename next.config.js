/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['i.annihil.us'],
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['@phosphor-icons/react/dist/icons/Shuffle.es.js'] = false;
    }
    return config;
  },
}

module.exports = nextConfig
