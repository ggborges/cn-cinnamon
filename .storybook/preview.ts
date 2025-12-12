import type { Preview } from '@storybook/react-webpack5';
import React from "react";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    theme: { mode: "light" },
  },
  decorators: [
    (Story, context) => {
      const mode = (context.parameters.theme?.mode ?? "light") as "light" | "dark";

      return React.createElement(
        "div",
        { className: mode === "dark" ? "dark" : "", style: { minHeight: "100vh" } },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;