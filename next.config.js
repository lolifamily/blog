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
                "source": "/oi/cdn-cgi/(.*)",
                "destination": "https://cf-blog-oi.lolifamily.js.org/non-exist-destination?path=$1"
            },{
                "source": "/project/cdn-cgi/(.*)",
                "destination": "https://cf-blog-project.lolifamily.js.org/non-exist-destination?path=$1"
            },{
                "source": "/cdn-cgi/(.*)",
                "destination": "https://cf-blog.lolifamily.js.org/non-exist-destination?path=$1"
            },{
                "source": "/oi/(.*)",
                "destination": "https://cf-blog-oi.lolifamily.js.org/$1"
            },{
                "source": "/project/(.*)",
                "destination": "https://cf-blog-project.lolifamily.js.org/$1"
            },{
                "source": "/:path(.*)",
                "destination": "https://cf-blog.lolifamily.js.org/:path"
            }]
        }
    },
}

module.exports = nextConfig
