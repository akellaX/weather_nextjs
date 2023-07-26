import type { Meta, StoryObj } from '@storybook/react';
import { OverviewCardGridElement } from '@/app/[lang]/[location]/_components/OverviewCardGridElement/OverviewCardGridElement';

const meta: Meta<typeof OverviewCardGridElement> = {
    title: 'components/OverviewCardGridElement',
    component: OverviewCardGridElement,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'darkBlue' },
    },
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
