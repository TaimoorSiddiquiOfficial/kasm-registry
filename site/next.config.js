/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HOP WORKSPACE',
    description: 'The official store for HOP supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'taimoorsiddiquiofficial.github.io',
    contactUrl: 'taimoorsiddiquiofficial.github.io/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
