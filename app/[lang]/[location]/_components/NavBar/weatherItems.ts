export const getWeatherItems = (t: (key: string) => string) => {
    return [
        {
            title: t('weather'),
            href: '/',
        },
        {
            title: t('maps'),
            href: '/',
        },
        {
            title: t('3Dmaps'),
            href: '/',
        },
        {
            title: t('hourlyForecast'),
            href: '/hourlyforecast',
        },
        {
            title: t('monthlyForecast'),
            href: '/',
        },
        {
            title: t('severeWeather'),
            href: '/',
        },
        {
            title: t('hurricane'),
            href: '/',
        },
        {
            title: t('pollen'),
            href: '/',
        },
        {
            title: t('airQuality'),
            href: '/',
        },
        {
            title: t('fireInformation'),
            href: '/',
        },
        {
            title: t('earthquakes'),
            href: '/',
        },
        {
            title: t('recordsAndAverages'),
            href: '/',
        },
    ];
};
