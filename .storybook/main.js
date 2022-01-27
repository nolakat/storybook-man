module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
   // 👇 Retrieve the current environment from the configType argument
   refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        vue: {
          title: 'Vue Storybook - Dev',
          url: 'http://localhost:7007',
        },
        react: {
          title: 'Vue Storybook - Dev',
          url: 'http://localhost:6006',
        }
      };
    }
    return {
      vue: {
        title: 'Vue- Prod',
        url: 'https://sb-test-vue.netlify.app',
      },
      react: {
        title: 'React',
        url: 'https://sb-test-react.netlify.app',
      }
    };
  },
};
