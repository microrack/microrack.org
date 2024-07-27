/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure the necessary objects exist
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = config.optimization.splitChunks || {};
      config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups || {};

      // Now it's safe to set the property
      config.optimization.splitChunks.cacheGroups.enhance = {
        test: /enhance\.ts$/,
        name: 'enhance',
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  }
};

export default nextConfig;