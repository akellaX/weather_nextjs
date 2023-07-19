type Condition = {
    name: string;
    icon: string;
    background: string;
};
type ConditionMap = Record<string, Condition>;

export const CONDITION_MAP: ConditionMap = {
    n2000: {
        name: 'Mostly Cloudy',
        icon: 'n2000',
        background: 'n2000',
    },
    d0000: {
        name: 'Sunny',
        icon: 'd0000',
        background: 'd0000',
    },
};
