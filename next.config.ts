import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
};

export default {
  webpack(config: NextConfig, { isServer }: any) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.(mp4)|(webm)$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash:8].[ext]',
        },
      }],
    });

    return config;
  },
}

// module.exports = withNextVideo()