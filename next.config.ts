import type { NextConfig } from 'next'

const BASE_PATH = '/scrolly-UX-portfolio'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    // Empty in dev so public files resolve from root; set in prod for GitHub Pages
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === 'development' ? '' : BASE_PATH,
  },
}

export default nextConfig
