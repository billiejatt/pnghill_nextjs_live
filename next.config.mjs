/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'png.pngtree.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cms.fectodigital.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'w7.pngwing.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
