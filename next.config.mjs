/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com','th.bing.com','www.techfunnel.com','www.usm.edu','images.unsplash.com','plus.unsplash.com','protondatalabs.com'],
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
};

export default nextConfig;
