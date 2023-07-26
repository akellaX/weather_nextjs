import styles from './page.module.css';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import * as redmondMock from '@/public/mocks/redmondMock.json';
import clsx from 'clsx';
import { prepareOverviewCardData } from '@/app/[lang]/[location]/_components/OverviewCard/utils/prepareOverviewCardData';
import DayCarousel from '@/app/[lang]/[location]/_components/DayCarousel/DayCarousel';
import { prepareDayCarouselData } from '@/app/[lang]/[location]/_components/DayCarousel/utils/prepareDayCarouselData';
import OverviewCard from '@/app/[lang]/[location]/_components/OverviewCard/OverviewCard';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

// async function getWeatherData(): Promise<WeatherData> {
//     const response = await fetch('http://localhost:3000/mocks/weatherApi.json');
//     return await response.json();
// }

interface MainPageProps {
    params: {
        location: string;
        lang: Locale;
    };
}

export default async function MainPage({ params }: MainPageProps) {
    let weatherData = weatherDataJson as unknown as WeatherData;
    if (params.location === 'redmond') {
        weatherData = redmondMock as unknown as WeatherData;
    }
    const localization = await getDictionary(params.lang);
    const conditionSymbol = weatherData.forecast.currentCondition.symbol;
    return (
        <main className={clsx(styles.main, styles[`${conditionSymbol}`])}>
            <OverviewCard
                localization={localization}
                weatherData={prepareOverviewCardData(weatherData)}
                size={'small'}
            />
            <DayCarousel item={prepareDayCarouselData(weatherData)} />
        </main>
    );
}
