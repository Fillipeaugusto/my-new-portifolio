/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		sw: '/sw.js',
	},
});
