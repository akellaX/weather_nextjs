import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const config: StorybookConfig = {
    stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addons',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-backgrounds',
        'storybook-react-intl',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },

    staticDirs: [path.resolve(__dirname, '../public')],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(path.dirname(__dirname), '.'),
        };
        return config;
    },
};
export default config;
