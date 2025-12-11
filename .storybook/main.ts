import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        // Regras explícitas para CSS + PostCSS + Tailwind 4
        rules: [
          {
            test: /\.css$/i,
            sideEffects: true,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 },
              },
              "postcss-loader",
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;