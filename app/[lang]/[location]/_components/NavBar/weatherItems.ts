import { Dictionary } from '@/types/Dictionary';

export const getWeatherItems = (localization: Dictionary) => {
    const NavBar = localization.NavBar;
    return [
        {
            title: NavBar.weather,
            href: '/',
        },
        {
            title: NavBar.maps,
            href: '/',
        },
        {
            title: NavBar['3Dmaps'],
            href: '/',
        },
        {
            title: NavBar.hourlyForecast,
            href: '/hourlyforecast',
        },
        {
            title: NavBar.monthlyForecast,
            href: '/',
        },
        {
            title: NavBar.severeWeather,
            href: '/',
        },
        {
            title: NavBar.hurricane,
            href: '/',
        },
        {
            title: NavBar.pollen,
            href: '/',
        },
        {
            title: NavBar.airQuality,
            href: '/',
        },
        {
            title: NavBar.fireInformation,
            href: '/',
        },
        {
            title: NavBar.earthquakes,
            href: '/',
        },
        {
            title: NavBar.recordsAndAverages,
            href: '/',
        },
    ];
};
