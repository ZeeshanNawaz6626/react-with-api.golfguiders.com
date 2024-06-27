// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app:any) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://backend-server.com',
//       changeOrigin: true,
//     })
//   );

//   app.use(
//     '/api1',
//     createProxyMiddleware({
//       target: 'https://api.golfguiders.com',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api1': '/graphql',
//       },
//     })
//   );

//   // app.use(
//   //   '/api2',
//   //   createProxyMiddleware({
//   //     target: 'http://9b34938d-3593-42df-8ce8-fa1d3243308b-us-east-1.apps.astra.datastax.com',
//   //     changeOrigin: true,
//   //     pathRewrite: {
//   //       '^/api2': '/api/graphql/social',
//   //     },
//   //   })
//   // );
// };
