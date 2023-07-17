import type { Meta, StoryObj } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';

export default {
    title: 'App/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    args: {
        rtl: false,
        scrollStep: 200,
        items: [
            <div
                key={1}
                style={{ backgroundColor: 'red', width: '300px' }}>
                Item 1
            </div>,
            <div
                key={2}
                style={{ backgroundColor: 'blue', width: '300px' }}>
                Item 2
            </div>,
            <div
                key={3}
                style={{ backgroundColor: 'green', width: '300px' }}>
                Item 3
            </div>,
            <div
                key={4}
                style={{ backgroundColor: 'yellow', width: '300px' }}>
                Item 4
            </div>,
        ],
    },
};

const Template = (args: CarouselProps) => (
    <div style={{ width: '500px' }}>
        <Carousel {...args} />
    </div>
);

export const Default = Template.bind({});
Template.args = {
    rtl: false,
    scrollStep: 200,
    items: [
        <div
            key={1}
            style={{ backgroundColor: 'red', width: '300px' }}>
            Item 1
        </div>,
        <div
            key={2}
            style={{ backgroundColor: 'blue', width: '300px' }}>
            Item 2
        </div>,
        <div
            key={3}
            style={{ backgroundColor: 'green', width: '300px' }}>
            Item 3
        </div>,
        <div
            key={4}
            style={{ backgroundColor: 'yellow', width: '300px' }}>
            Item 4
        </div>,
    ],
};
