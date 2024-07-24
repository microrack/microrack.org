/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
			unoptimized: true
	},
	webpack: (config, { isServer }) => {
			if (!isServer) {
					config.optimization.splitChunks = config.optimization.splitChunks || {};
					config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups || {};
					config.optimization.splitChunks.cacheGroups.faqEnhance = {
							test: /faq-enhance\.ts$/,
							name: 'faq-enhance',
							chunks: 'all',
							enforce: true,
					};
			}
			return config;
	}
};

export default nextConfig;