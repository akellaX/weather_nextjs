import type { Meta, StoryObj } from '@storybook/react';
import OverviewCard from '@/app/_components/OverviewCard/OverviewCard';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import { prepareOverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';
import { WeatherData } from '@/types/WeatherDataServerResponse';

const meta: Meta<typeof OverviewCard> = {
    title: 'components/OverviewCard',
    component: OverviewCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OverviewCard>;
const weatherData = prepareOverviewCardData(
    weatherDataJson as unknown as WeatherData
);

export const Large: Story = {
    args: {
        size: 'large',
        weatherData,
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        weatherData,
    },
};
