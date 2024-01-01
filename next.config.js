/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
        domains:['instagram.fkiv2-1.fna.fbcdn.net']
    }
}

module.exports = nextConfig
