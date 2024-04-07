/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    distDir: 'build',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
    async rewrites() {
      return [
        {
          source: '/new_worlds',
          destination: '/new_worlds/WebGL/index.html', // Points to public/new_worlds/WebGL/index.html
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  