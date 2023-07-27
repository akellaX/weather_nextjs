import type { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

const preview: Preview = {
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <NextIntlClientProvider>
                    <Story />
                </NextIntlClientProvider>
            </div>
        ),
    ],
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#000000' },
                { name: 'darkBlue', value: '#2c466c' },
            ],
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
