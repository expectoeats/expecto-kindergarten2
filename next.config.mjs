/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kindheitkindergarten.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kreativekidzz.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.eurokidsindia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.madeeasypreschool.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
