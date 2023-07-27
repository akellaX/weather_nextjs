import type { Meta, StoryObj } from '@storybook/react';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import DayCarousel from '@/app/[lang]/[location]/_components/DayCarousel/DayCarousel';
import { prepareDayCarouselData } from '@/app/[lang]/[location]/_components/DayCarousel/utils/prepareDayCarouselData';

const meta: Meta<typeof DayCarousel> = {
    title: 'components/DayCarousel',
    component: DayCarousel,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'darkBlue' },
    },
};

export default meta;
type Story = StoryObj<typeof DayCarousel>;
const weatherData = prepareDayCarouselData(
    weatherDataJson as unknown as WeatherData
);

export const Default: Story = {
    args: {
        item: weatherData,
    },
};
