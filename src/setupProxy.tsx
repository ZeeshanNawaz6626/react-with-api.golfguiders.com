// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app:any) {
//   app.use(
//     '/graphql',
//     createProxyMiddleware({
//       target: 'https://api.golfguiders.com',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/graphql': '/graphql',
//       },
//     })
//   );

//   app.use(
//     '/graphql',
//     createProxyMiddleware({
//       target: 'https://9b34938d-3593-42df-8ce8-fa1d3243308b-us-east-1.apps.astra.datastax.com/api',
//       changeOrigin: true,
//     })
//   );
// };
