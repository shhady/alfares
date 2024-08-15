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
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  