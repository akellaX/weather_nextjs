const locales = ['en', 'ru'];

const messages = locales.reduce(
    (acc, lang) => ({
        ...acc,
        [lang]: require(`../messages/${lang}.json`), // whatever the relative path to your messages json is
    }),
    {}
);

const formats = {}; // optional, if you have any formats

export const reactIntl = {
    defaultLocale: 'en',
    locales,
    messages,
    formats,
};
