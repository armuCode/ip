/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/hello",
        destination: "https://ip-armu-armucode.vercel.app/api/hello",
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;
