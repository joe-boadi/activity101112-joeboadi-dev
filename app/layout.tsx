import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ThemeSwitch from '@/app/ui/theme-switch';
import { ClientThemeWrapper, ThemeProvider } from '@/app/lib/theme-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ClientThemeWrapper>    
            {children}
            <ThemeSwitch/>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
