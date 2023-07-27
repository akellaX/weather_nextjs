import type { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';
import { reactIntl } from './reactIntl';
import * as enMessages from '@/messages/en.json';
import * as ruMessages from '@/messages/ru.json';
import { useGlobals } from '@storybook/addons';

const preview: Preview = {
    globals: {
        locale: reactIntl.defaultLocale,
        locales: {
            en: { title: 'English', left: '🇬🇧' },
            ru: { title: 'Russian', left: '🇷🇺' },
        },
    },
    decorators: [
        (Story) => {
            const [{ locale }] = useGlobals();
            const messages = {
                en: enMessages,
                ru: ruMessages,
            };
            return (
                <div style={{ margin: '3em' }}>
                    <NextIntlClientProvider
                        locale={locale}
                        messages={messages[locale]}>
                        <Story />
                    </NextIntlClientProvider>
                </div>
            );
        },
    ],
    parameters: {
        reactIntl,
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
