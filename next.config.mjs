/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'buildandsign-admin.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
