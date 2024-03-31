/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
			{
				protocol: 'http',
				hostname: 'ruartecontract.com',
			},
			{
				protocol: 'https',
				hostname: 'links.papareact.com',
			},
			{
				protocol: 'https',
				hostname: 'a0.muscache.com',
			},
		],
	},
}

export default nextConfig
