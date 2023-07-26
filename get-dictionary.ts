import type { Locale } from './i18n-config';
import { Dictionary } from '@/types/Dictionary';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    ru: () => import('./dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
    dictionaries[locale]();
