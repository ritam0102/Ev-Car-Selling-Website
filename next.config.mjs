/** @type {import('next').NextConfig} */

const nextConfig = {
	devIndicators: false, // ✅ disables Next.js dev tools UI

	turbopack: {},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;
