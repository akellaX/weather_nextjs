import styles from './page.module.css';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import OverviewCard from '@/app/_components/OverviewCard/OverviewCard';
import { prepareOverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import * as redmondMock from '@/public/mocks/redmondMock.json';
import DayCarousel from '@/app/_components/DayCarousel/DayCarousel';
import { prepareDayCarouselData } from '@/app/_components/DayCarousel/utils/prepareDayCarouselData';
import clsx from 'clsx';

// async function getWeatherData(): Promise<WeatherData> {
//     const response = await fetch('http://localhost:3000/mocks/weatherApi.json');
//     return await response.json();
// }

interface MainPageProps {
    params: {
        location: string;
    };
}

export default function MainPage({ params }: MainPageProps) {
    let weatherData = weatherDataJson as unknown as WeatherData;
    if (params.location === 'redmond') {
        weatherData = redmondMock as unknown as WeatherData;
    }
    const conditionSymbol = weatherData.forecast.currentCondition.symbol;
    return (
        <main className={clsx(styles.main, styles[`${conditionSymbol}`])}>
            <OverviewCard
                weatherData={prepareOverviewCardData(weatherData)}
                size={'small'}
            />
            <DayCarousel item={prepareDayCarouselData(weatherData)} />
        </main>
    );
}
