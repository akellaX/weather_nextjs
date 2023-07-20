import type { Meta, StoryObj } from '@storybook/react';
import DayCarouselItem from './DayCarouselItem';
import * as weatherDataJson from '@/public/mocks/weatherApi.json';
import { WeatherData } from '@/types/WeatherDataServerResponse';
import { prepareDayCarouselData } from '@/app/_components/DayCarousel/utils/prepareDayCarouselData';

const meta: Meta<typeof DayCarouselItem> = {
    title: 'App/DayCarouselItem',
    component: DayCarouselItem,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        backgrounds: { default: 'darkBlue' },
    },
};

export default meta;
type Story = StoryObj<typeof DayCarouselItem>;

export const Default: Story = {
    args: {
        ...prepareDayCarouselData(weatherDataJson as unknown as WeatherData)[0],
        onClick: () => {},
    },
};

export const Expanded: Story = {
    args: {
        ...prepareDayCarouselData(weatherDataJson as unknown as WeatherData)[0],
        onClick: () => {},
        isExtended: true,
    },
};
