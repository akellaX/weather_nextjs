import { WeatherData } from '@/types/WeatherDataServerResponse';

export interface OverviewCardData {
    temperature: string;
    feelsLike: string;
    windSpeed: string;
    windDirection: number;
    humidity: string;
    pressure: string;
    visibility: string;
    uvIndex: string;
    dewPoint: string;
    temperatureUnit: string;
    symbol: string;
    shotDescription: string;
    responseTime: Date;
}

export const prepareOverviewCardData = (
    data: WeatherData
): OverviewCardData => {
    const {
        currentTemperature,
        feels,
        windSpeed,
        windDir,
        humidity,
        baro,
        visiblity,
        uv,
        dewPoint,
        degreeSetting,
        symbol,
        shortCap,
    } = data.forecast.currentCondition;
    return {
        temperature: currentTemperature,
        temperatureUnit: degreeSetting,
        dewPoint,
        feelsLike: String(feels),
        uvIndex: String(uv),
        visibility: visiblity,
        pressure: baro,
        humidity,
        windSpeed,
        windDirection: windDir,
        symbol,
        shotDescription: shortCap,
        responseTime: new Date(
            data.forecast.currentCondition.currentRaw.created
        ),
    };
};
