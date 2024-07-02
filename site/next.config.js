/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HOP WORKSPACE',
    description: 'The official store for HOP supported workspaces.',
    icon: 'taimoorsiddiquiofficial.github.io/kasm-registry/1.0/img/logo.svg',
    listUrl: 'taimoorsiddiquiofficial.github.io/kasm-registry/1.0',
    contactUrl: 'taimoorsiddiquiofficial.github.io/kasm-registry/1.0/support',
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
