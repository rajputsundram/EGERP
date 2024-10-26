/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'egerppanipat.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  