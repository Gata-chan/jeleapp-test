/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jeleapp-test/' : '',
  basePath: isProd ? '/jeleapp-test' : '',
  output: 'export'
};

export default nextConfig;
