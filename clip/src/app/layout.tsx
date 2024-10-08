import type { Metadata } from 'next';
import { Inter, Noto_Sans } from 'next/font/google';
import QueryProvider from './Provider/QueryProvider/query-provider';
import './globals.css';
import '../../public/fonts/style.css';
import PaletteProvider from './Provider/PaletteProvider/PaletteProvider';
import Wrapper from './SharedComponent/Wrapper/Wrapper';
import RecoilProvider from './Provider/RecoilProvider/RecoilProvider';
import StyledComponentsRegistry from './Provider/StyledComponentsRegistry/StyledComponentsRedgistry';

const noto_Sans = Noto_Sans({ subsets: ['latin'] });

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
      <head>
        <link
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
          href={`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-gov.min.css`}
        />
      </head>
      <body className={noto_Sans.className}>
        <QueryProvider>
          <StyledComponentsRegistry>
            <PaletteProvider>
              <RecoilProvider>
                <Wrapper>{children}</Wrapper>
              </RecoilProvider>
            </PaletteProvider>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
