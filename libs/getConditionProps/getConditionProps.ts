import { ConditionProp } from '@/types/ConditionProp';
import { CONDITION_MAP } from '@/constants/conditionMap';
import {
    CONDITION_BACKGROUND_PATH,
    CONDITION_SVG_PATH,
} from '@/constants/pathConstants';

export const getConditionProps = (symbol: string): ConditionProp => {
    const isDay = symbol[0] === 'd';
    const { name, icon, background } = CONDITION_MAP[symbol];
    return {
        name,
        isDay,
        iconHref: `/${CONDITION_SVG_PATH}/${icon}.svg`,
        backgroundHref: `/${CONDITION_BACKGROUND_PATH}/${background}.png`,
    };
};
