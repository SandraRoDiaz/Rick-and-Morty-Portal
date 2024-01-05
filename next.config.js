/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/**", //si se muestra en otra page hay que cambiarlo
      },
    ],
  },
};

module.exports = nextConfig;
