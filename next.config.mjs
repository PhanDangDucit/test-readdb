/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: 'app/ui/imageloader.tsx',
    },
};

export default nextConfig;
