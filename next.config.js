/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
        // domains:['instagram.fkiv2-1.fna.fbcdn.net'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.cdninstagram.com',
              port: '',
              pathname: '**',
            },
          
          ],
    }
}

module.exports = nextConfig
