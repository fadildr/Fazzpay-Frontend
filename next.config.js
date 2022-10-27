/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_BACKEND: "https://fazzpay-rose.vercel.app",
  },
  images: { domains: ["res.cloudinary.com"] },
};

module.exports = nextConfig;
