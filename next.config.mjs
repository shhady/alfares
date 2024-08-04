/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '**', // Allow all paths
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**', // Allow all paths
        },
        {
          protocol: 'https',
          hostname: 'example.com',
          pathname: '/images/**', // Allow only paths starting with /images/
        },
        {
          protocol: 'https',
          hostname: 'unsplash.com',
          pathname: '**', // Allow all paths
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**', // Allow all paths
        },
      ],
    },
    
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Permissions-Policy',
              value: 'geolocation=(self), microphone=(self), camera=(self)', // Use only recognized features
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  