const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/api', // 프록시할 경로
        createProxyMiddleware({
/*             target: "http://apis.data.go.kr/1543061/abandonmentPublicSrvc", // 프록시할 대상 서버 */
/*             target: "http://localhost:3000/", // 프록시할 대상 서버
            changeOrigin: true, // 대상 서버의 origin 변경 여부
            pathRewrite: { // 경로 재작성 설정
                "^/api": "", // '/api'를 ''(빈 문자열)로 변경
            }, */
            target: "http://apis.data.go.kr", // 프록시할 대상 서버의 기본 URL
            changeOrigin: true, // 대상 서버의 origin 변경 여부
            pathRewrite: { // 경로 재작성 설정
                "^/api": "/1543061/abandonmentPublicSrvc", // '/api'를 프록시할 대상 서버의 경로로 변경
            },
            // 프록시할 요청 필터링
            // 여기에서는 SSRProvider.mjs.map 파일에 대한 요청을 제외하도록 설정
            bypass: function (req, res, proxyOptions) {
                if (req.url.includes('SSRProvider.mjs.map')) {
                    return req.url;
                }
            }
        })
    );
};
