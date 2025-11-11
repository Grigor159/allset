import createNextIntlPlugin from 'next-intl/plugin';
// const withNextIntl = createNextIntlPlugin();
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default withNextIntl(nextConfig);