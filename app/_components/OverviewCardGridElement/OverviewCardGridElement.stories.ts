import type { Meta, StoryObj } from '@storybook/react';
import { OverviewCardGridElement } from '@/app/_components/OverviewCardGridElement/OverviewCardGridElement';
import Image from 'next/image';
import React from 'react';

const meta: Meta<typeof OverviewCardGridElement> = {
    title: 'components/OverviewCardGridElement',
    component: OverviewCardGridElement,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OverviewCardGridElement>;

export const WithoutIcon: Story = {
    args: {
        text: '91',
        title: 'Air Quality',
    },
};

// export const WithIcon: Story = {
//     args: {
//         text: '5 km/h',
//         title: 'Wind',
//         additionalIcon: (
//             <Image
//                 src='/svg/windArrow.svg'
//                 alt={'wind dir'}
//                 alt={'wind dir'}
//                 width={16}
//                 height={16}
//             />
//         ),
//         iconsPosition: 'right',
//     },
// };
