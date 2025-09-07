import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  distDir: process.env.NODE_ENV === "development" ? undefined : "docs",
  webpack(config: NextConfig, { isServer }: any) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.(mp4)|(webm)$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          // publicPath: `${prefix}/app/assets/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash:8].[ext]',
        },
      }],
    });

    return config;
  },
};

module.exports = nextConfig;
