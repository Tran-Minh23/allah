/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/dashboard',
            permanent: true,
          },
        ]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ik.imagekit.io',
        },
      ]
    }
};

export default nextConfig;
