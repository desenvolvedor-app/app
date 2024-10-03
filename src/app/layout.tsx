import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

export const metadata: Metadata = {
    title: 'Desenvolvedor.App',
    description:
        'Uma plataforma colaborativa criada para unir desenvolvedores e futuros devs do Brasil, com o objetivo de aprender, compartilhar e construir juntos projetos open-source.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
