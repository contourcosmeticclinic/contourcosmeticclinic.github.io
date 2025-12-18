// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other Next.js config here
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "contourcosmeticclinic.com" }],
        destination: "https://www.contourcosmeticclinic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
