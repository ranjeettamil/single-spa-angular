const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "auth",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: [/^@example-auth\/.+$/], // /^@fimlab-ui\/.+$/
  });
};

// chainWebpack: config => {
//   config.externals({
//       '@muy/atomic': '@muy/atomic'
//   });
// }

// externals: {
//   'utility_modules/manage-tasks-api': 'manageTasksApi'
// }

// module.exports = (webpackConfigEnv, argv) => {
//   const defaultConfig = singleSpaDefaults({
//     orgName: "example",
//     projectName: "auth",
//     webpackConfigEnv,
//     argv,
//   });

//   return merge(defaultConfig, {
//     // modify the webpack config however you'd like to by adding to this object
//     externals: ['@example/auth'],
//     devServer: {
//       port: 9005,
//       onListening: ({ compiler }) => {
//         const { https, client } = compiler.options.devServer;
//         const { publicPath, filename } = compiler.options.output;
//         const protocol = https ? "https://" : "http://";
//         const port = !client.port ? "" : `:${client.port}`;
//         const path = ["", "auto"].includes(publicPath) ? "/" : publicPath;
//         console.log(
//           `⚡️ single-spa application entry: ${protocol}${client.host}${port}${path}${filename}`
//         );
//       },
//     },
//   });
// };


// const { mergeWithRules } = require("webpack-merge");
// const singleSpaDefaults = require("webpack-config-single-spa-react");

// module.exports = (webpackConfigEnv) => {
//   const defaultConfig = singleSpaDefaults({
//     orgName: "example",
//     projectName: "auth",
//     webpackConfigEnv,
//   });

//   const config = mergeWithRules({
//     module: {
//       rules: {
//         test: "match",
//         use: "replace",
//       },
//     },
//   })(defaultConfig, {
//     // customize the webpack config here
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: [
//             require.resolve("style-loader", {
//               paths: [require.resolve("webpack-config-single-spa")],
//             }),
//             require.resolve("css-loader", {
//               paths: [require.resolve("webpack-config-single-spa")],
//             }),
//             "postcss-loader",
//           ],
//         },
//       ],
//     },
//   });

//   return config;
// };


// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack')
//   .default;

// module.exports = (config, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
//   singleSpaWebpackConfig.externals = [/^@example\/auth$/];
//   return singleSpaWebpackConfig;
// };