import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-styling",
		{
			name: "@storybook/addon-styling",
			options: {},
		},
		{
			name: "@storybook/addon-styling",
			options: {},
		},
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
