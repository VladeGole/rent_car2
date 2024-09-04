/** @type {import('next').NextConfig} */
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.imagin.studio',
          pathname: '/**',
        },
      ],
    },
  };
