export interface WeatherData {
    location: LocationRawClass;
    forecast: WeatherDataForecast;
    profile: Profile;
}

export interface WeatherDataForecast {
    lastUpdated: Date;
    currentCondition: CurrentCondition;
    forecast: ForecastElement[];
    nowcasting: Nowcasting;
    source: Source;
    provider: Provider;
    aqiProvider: AqiProvider;
    alertsInfo: AlertsInfo;
    alertsInfoList: AlertsInfo[];
    contentData: ContentDatum[];
    mapsMetaData: MapsMetaData;
    unit: number;
    commentary: null;
    lifeDaily: LifeDaily;
    stormInfo: null;
}

export interface AlertsInfo {
    id: string;
    title: string;
    event: string;
    eventName: string;
    level: string;
    abbreviation: string[];
    shortCap: string;
    severity: string;
    significance: string;
    credit: string;
    created: Date;
    start: Date;
    end: Date;
    class: string;
    statusText: string;
    safetyGuide: string;
    detailIndex: string;
}

export interface AqiProvider {
    name: string;
}

export interface ContentDatum {
    id: string;
    cid: number;
    ranking: number;
    contenttype: string;
    content: Content[];
}

export interface Content {
    title: string;
    capIcon: string;
    body: string;
    destUrl: string;
    displayType: string;
    renderPlaces: string[];
}

export interface CurrentCondition {
    isAlert: boolean;
    currentTemperature: string;
    currentTemperatureDesc: number;
    pvdrIcon: string;
    symbol: string;
    normalizedSkyCode: string;
    shortCap: string;
    skycode: Precipitation;
    precipitation: Precipitation;
    deepLink: string;
    degreeSetting: string;
    alternateDegreeSetting: string;
    uv: number;
    uvDesc: string;
    feels: number;
    humidity: string;
    windDesc: string;
    windSpeed: string;
    windDir: number;
    dewPoint: string;
    baro: string;
    visiblity: string;
    richCaps: any[];
    aqi: string;
    aqiSeverity: string;
    aqLevel: number;
    primaryPollutant: string;
    isNight: boolean;
    currentRaw: CurrentRaw;
    unitsRaw: UnitsRaw;
    locationRaw: LocationRawClass;
    alertCount: number;
    alertSignificance: string;
}

export interface CurrentRaw {
    baro: number;
    cap: string;
    capAbbr: string;
    daytime: Daytime;
    dewPt: number;
    feels: number;
    rh: number;
    icon: number;
    symbol: string;
    pvdrIcon: string;
    urlIcon: string;
    wx: string;
    sky: string;
    temp: number;
    tempDesc: number;
    utci: number;
    uv: number;
    uvDesc: string;
    vis: number;
    windDir: number;
    windSpd: number;
    windTh: number;
    windGust: number;
    created: Date;
    pvdrCap: string;
    aqi: number;
    aqiSeverity: string;
    aqLevel: number;
    primaryPollutant: string;
    aqiValidTime: Date;
    richCaps: any[];
    cloudCover: number;
}

export enum Daytime {
    D = 'd',
    N = 'n',
}

export interface LocationRawClass {
    locality: string;
    region: string;
    subRegion: string;
    country: string;
    isoCode: string;
    language: string;
    latitude: string;
    longitude: string;
    displayName: string;
}

export interface Precipitation {
    children: string;
}

export interface UnitsRaw {
    system: string;
    pressure: Pressure;
    temperature: string;
    speed: Speed;
    height: Height;
    distance: string;
    time: string;
}

export enum Height {
    CM = 'cm',
}

export enum Pressure {
    MB = 'mb',
}

export enum Speed {
    KMH = 'km/h',
}

export interface ForecastElement {
    id: string;
    day: Date;
    dayCode: string;
    nightCode: string;
    daySymbol: Symbol;
    nightSymbol: NightSymbol;
    highTemp: number;
    lowTemp: number;
    highTemperature: string;
    lowTemperature: string;
    image: Image;
    pvdrIcon: string;
    symbol: Symbol;
    glyphCode: GlyphCode;
    normalizedSkyCode: string;
    precipitation: string;
    nightPrecipitation: string;
    humidity: string;
    humidityLow: string;
    humidityHi: string;
    windSpeed: string;
    windSpeedUnit: Speed;
    airPressure: AirPressure;
    summaries: string[];
    dayNightSummaries: DayNightSummaries;
    almanac: Almanac;
    deepLink: string;
    hourly: Hourly[];
    uv: number;
    uvDesc: UvDesc;
    windMaxRaw: number;
    windMax: string;
    windMaxDir: number;
    cap: Cap;
    nightCap: NightCap;
    dayCap: Cap;
    rainAmount: RainAmount;
    snowAmount: boolean;
}

export enum AirPressure {
    NA = 'N/A',
}

export interface Almanac {
    valid: Date;
    sunrise: Date;
    sunset: Date;
    moonrise: Date;
    moonset: Date;
    moonState: string;
    moonPhase: MoonPhase;
    moonPhaseCode: MoonPhaseCode;
}

export enum MoonPhase {
    New = 'New',
    WaningCrescent = 'Waning Crescent',
    WaxingCrescent = 'Waxing Crescent',
}

export enum MoonPhaseCode {
    New = 'New',
    WaCR = 'WaCr',
    WxCR = 'WxCr',
}

export enum Cap {
    MostlySunny = 'Mostly sunny',
    PartlySunny = 'Partly sunny',
    Sunny = 'Sunny',
}

export interface DayNightSummaries {}

export enum Symbol {
    D0000 = 'd0000',
    D1000 = 'd1000',
    D2000 = 'd2000',
}

export enum GlyphCode {
    MostlySunnyDay = 'MostlySunnyDay',
    PartlyCloudyDay = 'PartlyCloudyDay',
    SunnyDay = 'SunnyDay',
}

export interface Hourly {
    temperature: number;
    temperatureDesc: number;
    cap: string;
    airPressure: string;
    pressureUnit: Pressure;
    humidity: string;
    windGust: string;
    dewPt: string;
    cloudCover: string;
    vis: string;
    visibility: number;
    rh: number;
    glyphCode: string;
    pvdrIcon: string;
    symbol: string;
    normalizedSkyCode: string;
    feels: number;
    uv: number;
    time: Date;
    timeStr: Date;
    windSpeed: string;
    windSpeedUnit: Speed;
    windDir: number;
    daytime: Daytime;
    icon?: number;
    precipitation?: string;
    rainAmount?: number;
    snowAmount?: number;
    precipitationHeightUnit?: Height;
}

export interface Image {
    alt: Cap;
}

export enum NightCap {
    Clear = 'Clear',
    MostlyClear = 'Mostly clear',
    PartlyCloudy = 'Partly cloudy',
}

export enum NightSymbol {
    N0000 = 'n0000',
    N1000 = 'n1000',
    N2000 = 'n2000',
}

export enum RainAmount {
    The0CM = '0 cm',
}

export enum UvDesc {
    High = 'High',
    VeryHigh = 'Very High',
}

export interface LifeDaily {
    days: { [key: string]: Day }[];
    dayhours: any[];
}

export interface Day {
    rankId: number;
    categoryId: string;
    summary: string;
}

export interface MapsMetaData {
    NowcastVectorMap: NowcastVectorMap;
    NowcastVectorMapV3: NowcastVectorMapV3;
    PRateMap: NowcastVectorMap;
    TileImageMetadata: TileImageMetadata;
    AirQualityHeatMap: AirQualityHeatMap;
    SevereWeatherSvg: SevereWeatherSVG;
    PollenCity: Pollen;
    PollenImage: Pollen;
    HurricaneSvg: HurricaneSVG;
    WildFireSvg: NowcastVectorMap;
    SevereWeatherText: NowcastVectorMap;
    TemperatureGrid: AirQualityHeatMap;
    TemperatureGridRR: TemperatureGridRr;
    TemperatureGridCC: TemperatureGridCC;
    AirQualityHeatMapEu: AirQualityHeatMapEu;
    EuPollenCity: EuPollen;
    EuPollenImage: EuPollen;
    ForecastVideo: ForecastVideo;
    ThunderstormPolygonSvg: TemperatureGridRr;
    LightningStrikeSvg: LightningStrikeSVG;
}

export interface AirQualityHeatMap {
    uris: AirQualityHeatMapUris;
}

export interface AirQualityHeatMapUris {
    '202307132000': string;
}

export interface AirQualityHeatMapEu {
    uris: AirQualityHeatMapEuUris;
}

export interface AirQualityHeatMapEuUris {
    '202307132100': string;
}

export interface EuPollen {
    uris: EuPollenCityUris;
}

export interface EuPollenCityUris {
    '202307130000': string;
}

export interface ForecastVideo {
    uris: ForecastVideoUris;
}

export interface ForecastVideoUris {
    '000101010000': string;
}

export interface HurricaneSVG {
    uris: HurricaneSVGUris;
}

export interface HurricaneSVGUris {
    '202307132038': string;
}

export interface LightningStrikeSVG {
    uris: LightningStrikeSVGUris;
}

export interface LightningStrikeSVGUris {
    '202307132134': string;
}

export interface NowcastVectorMap {
    uris: NowcastVectorMapUris;
}

export interface NowcastVectorMapUris {
    '202307132132': string;
}

export interface NowcastVectorMapV3 {
    uris: NowcastVectorMapV3Uris;
}

export interface NowcastVectorMapV3Uris {
    '202206212228': string;
}

export interface Pollen {
    uris: PollenCityUris;
}

export interface PollenCityUris {
    '202307132119': string;
}

export interface SevereWeatherSVG {
    uris: SevereWeatherSVGUris;
}

export interface SevereWeatherSVGUris {
    '202307132131': string;
}

export interface TemperatureGridCC {
    uris: TemperatureGridCCUris;
}

export interface TemperatureGridCCUris {
    '202307132115': string;
}

export interface TemperatureGridRr {
    uris: TemperatureGridRRUris;
}

export interface TemperatureGridRRUris {
    '202307132120': string;
}

export interface TileImageMetadata {
    uris: TileImageMetadataUris;
}

export interface TileImageMetadataUris {
    '202307131200': string;
}

export interface Nowcasting {
    precipitation: number[];
    templateType: string;
    minutesToTransit: number;
    summary: string;
    shortSummary: string;
    taskbarSummary: string;
    horrizonCount: number;
    minutesBetweenHorrizons: number;
    enableRainSignal: boolean;
    raintype: string;
    timestamp: Date;
    weathertype: number;
    nowcastingDistance: number;
    nearbyPrecipitationType: number;
    isRaining: boolean;
    useNowcastSummary: string;
}

export interface Provider {
    name: string;
    url: string;
}

export interface Source {
    id: string;
    coordinates: Coordinates;
    location: SourceLocation;
    utcOffset: string;
    countryCode: string;
}

export interface Coordinates {
    lat: number;
    lon: number;
}

export interface SourceLocation {
    Name: string;
    StateCode: string;
    CountryName: string;
    CountryCode: string;
    TimezoneName: string;
    TimezoneOffset: string;
}

export interface Profile {
    followedLocations: any[];
    detectedLocation: DetectedLocation;
}

export interface DetectedLocation {
    from: number;
    language: string;
    latitude: string;
    longitude: string;
}
