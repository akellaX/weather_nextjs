export interface Dictionary {
    NavBar: NavBar;
    overviewCard: OverviewCard;
}

export interface NavBar {
    discover: string;
    following: string;
    weather: string;
    maps: string;
    '3Dmaps': string;
    hourlyForecast: string;
    monthlyForecast: string;
    severeWeather: string;
    hurricane: string;
    pollen: string;
    fireInformation: string;
    earthquakes: string;
    airQuality: string;
    recordsAndAverages: string;
}

export interface OverviewCard {
    currentWeather: string;
    airQuality: string;
    wind: string;
    visibility: string;
    uvIndex: string;
    humidity: string;
    feelsLike: string;
    dewPoint: string;
    pressure: string;
}
