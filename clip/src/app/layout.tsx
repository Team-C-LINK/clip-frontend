import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import QueryProvider from './Provider/QueryProvider/query-provider';
import './globals.css';
import '../../public/fonts/style.css';
import PaletteProvider from './Provider/PaletteProvider/PaletteProvider';
import { GoogleAnalytics } from './Provider/GoogleAnalytics/GoogleAnalytics';
import Wrapper from './SharedComponent/Wrapper/Wrapper';
import RecoilProvider from './Provider/RecoilProvider/RecoilProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clip!',
  description: 'Generated by create next app',
  icons: {
    icon: '/image/clip.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <QueryProvider>
          <PaletteProvider>
            <RecoilProvider>
              <Wrapper>{children}</Wrapper>
            </RecoilProvider>
          </PaletteProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
