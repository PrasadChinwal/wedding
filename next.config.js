module.exports = {
    experimental: {
        async headers() {
            return [
                {
                    source: '/(.*)?',
                    headers: [
                        {
                            key: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            key: 'Access-Control-Allow-Methods',
                            value: 'HEAD,POST'
                        },
                    ]
                }
            ]
        },
    }
}
