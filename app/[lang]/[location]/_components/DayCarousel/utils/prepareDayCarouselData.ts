import { WeatherData } from '@/types/WeatherDataServerResponse';
import { parseDateString } from '@/libs/parseDateString/parseDateString';

export type DayCarouselProps = {
    day: string;
    iconHref: string;
    highestTemp: string;
    lowestTemp: string;
    condition: string;
    humidity: string;
};

export const prepareDayCarouselData = (
    weatherData: WeatherData
): DayCarouselProps[] => {
    const timezoneOffset = weatherData.forecast.source.location.TimezoneOffset;
    return weatherData.forecast.forecast.map((day) => ({
        day: parseDateString(day.day, timezoneOffset),
        // TODO: Add real condition
        iconHref: '/svg/conditions/icons/n2000.svg',
        highestTemp: `${day.highTemp}°`,
        lowestTemp: `${day.lowTemp}°`,
        // TODO: Add real condition
        condition: 'Mostly Sunny',
        humidity: `${day.humidity}%`,
    }));
};
