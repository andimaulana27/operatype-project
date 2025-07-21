// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qxiaghvizkasevbqhied.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/font-previews/**',
      },
    ],
  },
};

export default nextConfig;