/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages, set basePath if your repo name is not the root
  // basePath: '/your-repo-name',
  // trailingSlash: true,
}

module.exports = nextConfig

