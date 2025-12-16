import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src"),
    };
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
    ];
    return config;
  },
};

export default config;