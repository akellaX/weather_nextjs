import styles from './page.module.css';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import OverviewCard from '@/app/_components/OverviewCard/OverviewCard';
import { prepareOverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';

async function getWeatherData(): Promise<WeatherData> {
    const response = await fetch('http://localhost:3000/mocks/weatherApi.json');
    return await response.json();
}

export default async function Home() {
    const weatherData = await getWeatherData();
    return (
        <main className={styles.main}>
            <OverviewCard
                weatherData={prepareOverviewCardData(weatherData)}
                size={'small'}
            />
        </main>
    );
}
