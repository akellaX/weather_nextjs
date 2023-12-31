import type { Meta, StoryObj } from '@storybook/react';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import { prepareOverviewCardData } from '@/app/[lang]/[location]/_components/OverviewCard/utils/prepareOverviewCardData';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import OverviewCardGrid from '@/app/[lang]/[location]/_components/OverviewCardGrid/OverviewCardGrid';

const meta: Meta<typeof OverviewCardGrid> = {
    title: 'components/OverviewCardGrid',
    component: OverviewCardGrid,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'darkBlue' },
    },
};

export default meta;
type Story = StoryObj<typeof OverviewCardGrid>;
const weatherData = prepareOverviewCardData(
    weatherDataJson as unknown as WeatherData
);

export const Large: Story = {
    args: {
        isLargeCard: true,
        weatherData,
    },
};

export const Small: Story = {
    args: {
        isLargeCard: false,
        weatherData,
    },
};
