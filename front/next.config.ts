import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dji.pe',
      },

      {
        protocol: 'https',
        hostname: 'se-cdn.djiits.com',
      },

      {
        protocol: 'https',
        hostname: 'tiendadefotografia.com.co',
      },

      {
        protocol: 'https',
        hostname: 'audiocolor.co',
      },

      {
        protocol: 'https',
        hostname: 'dronerossantander.com',
      },

      {
        protocol: 'https',
        hostname: 'comunicacionesyseguridad.com',
      },

      {
        protocol: 'https',
        hostname: 'djistore.com.pa',
      },
      
      {
        protocol: 'https',
        hostname: 'drontechx.com',
      },
    ],
  },
}

export default nextConfig
