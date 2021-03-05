module.exports = {
  stories: [
    "../_includes/components/**/*.stories.mdx",
    "../_includes/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../_includes/layouts/**/*.stories.mdx",
    "../_includes/layouts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
};
