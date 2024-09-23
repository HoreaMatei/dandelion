/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
  },
};

export default nextConfig;
