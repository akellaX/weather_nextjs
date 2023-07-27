import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import NavBar from '@/app/[lang]/[location]/_components/NavBar/NavBar';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MSN Weather APP',
    description: 'MSN Weather APP',
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function RootLayout({
    params,
    children,
}: {
    params: {
        lang: string;
    };
    children: React.ReactNode;
}) {
    // client i18n
    const lang = params.lang;
    let messages;
    try {
        messages = (await import(`@/messages/${lang}.json`)).default;
    } catch (error) {
        notFound();
    }
    // server i18n
    const locale = useLocale();
    if (lang !== locale) {
        notFound();
    }
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider
                    locale={lang}
                    messages={messages}>
                    <NavBar />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
