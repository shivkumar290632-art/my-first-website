import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { webpack }) {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /^@\/db$/,
      fileURLToPath(new URL("./db/vercel.ts", import.meta.url)),
    ));
    return config;
  },
};

export default nextConfig;
