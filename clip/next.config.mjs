/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clip-s3.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'clip-s3.s3.amazonaws.com',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
