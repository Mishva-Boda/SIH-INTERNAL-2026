/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for catching potential issues early
  reactStrictMode: true,

  // SWC minification (default in Next.js 14)
  swcMinify: true,

  // Experimental features
  experimental: {
    // Optimize package imports for tree-shaking
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
      '@radix-ui/react-progress',
      '@radix-ui/react-slider',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-accordion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-switch',
      '@radix-ui/react-toast',
      'recharts',
      'framer-motion',
      'date-fns',
    ],
    // Server Actions
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['localhost:3000', 'careerverse.ai', '*.careerverse.ai'],
    },
    // Typed routes
    typedRoutes: false,
  },

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'graph.facebook.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.careerverse.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'college-logos.careerverse.ai',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Environment variables that are exposed to the browser
  env: {
    NEXT_PUBLIC_APP_NAME: 'CareerVerse AI',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://careerverse.ai',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/career-test',
        destination: '/assessment',
        permanent: true,
      },
      {
        source: '/quiz',
        destination: '/assessment',
        permanent: true,
      },
      {
        source: '/colleges',
        destination: '/explore/colleges',
        permanent: false,
      },
      {
        source: '/scholarships',
        destination: '/explore/scholarships',
        permanent: false,
      },
    ]
  },

  // Rewrites (API proxy in development)
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        // Proxy AI API calls in development
        ...(process.env.NODE_ENV === 'development'
          ? [
              {
                source: '/api/ai/:path*',
                destination: `${process.env.AI_API_BASE_URL || 'http://localhost:8000'}/:path*`,
              },
            ]
          : []),
      ],
      fallback: [],
    }
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Cache static assets
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // SVG security
      {
        source: '/icons/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'none'; style-src 'unsafe-inline'",
          },
        ],
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Bundle analyzer (only when ANALYZE=true)
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
        })
      )
    }

    // Ignore certain modules on server side
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    }

    return config
  },

  // Turbopack configuration (for next dev --turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Output configuration
  output: process.env.NEXT_OUTPUT === 'export' ? 'export' : undefined,

  // Trailing slash
  trailingSlash: false,

  // Power by header
  poweredByHeader: false,

  // Compression
  compress: true,

  // Page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  // ESLint during builds
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
}

module.exports = nextConfig
