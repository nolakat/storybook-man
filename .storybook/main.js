module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
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
      html: {
        title: 'HTML',
        url: 'https://sb-test-html.netlify.app',
      },
      vue: {
        title: 'Vue',
        url: 'https://sb-test-vue.netlify.app',
      },
      react: {
        title: 'React',
        url: 'https://sb-test-react.netlify.app',
      }
    };
  }
};
