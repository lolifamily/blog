/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    skipTrailingSlashRedirect: true,
    async headers() {
        return [{
            "source": "/(.*)",
            "headers": [{
                "key": "Strict-Transport-Security",
                "value": "max-age=63072000; includeSubDomains; preload"
            }]
        }]
    },
    async rewrites() {
        return {
            beforeFiles: [{
                "source": "/oi/cdn-cgi/:path*",
                "destination": "https://cf-blog-oi.lolifamily.js.org/non-exist-destination?path=:path*"
            },{
                "source": "/project/cdn-cgi/:path*",
                "destination": "https://cf-blog-project.lolifamily.js.org/non-exist-destination?path=:path*"
            },{
                "source": "/cdn-cgi/:path*",
                "destination": "https://cf-blog.lolifamily.js.org/non-exist-destination?path=:path*"
            },{
                "source": "/oi/:path*",
                "destination": "https://cf-blog-oi.lolifamily.js.org/:path*"
            },{
                "source": "/project/:path*",
                "destination": "https://cf-blog-project.lolifamily.js.org/:path*"
            },{
                "source": "/:path*",
                "destination": "https://cf-blog.lolifamily.js.org/:path*"
            }]
        }
    },
}

module.exports = nextConfig
