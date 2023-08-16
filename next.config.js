/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
    // loader: "custom",
    // loaderFile: "./src/image.ts"
  }
}

module.exports = nextConfig;
