/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",  
        pathname: "/**",  
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",  
        pathname: "/**",  
      },
    ],
  },
};

module.exports = nextConfig;