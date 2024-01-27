import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ThemeSwitch from '@/app/ui/theme-switch';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body className={`${inter.className} relative antialiased`}>
        {children}
      </body>
    </html>
  );
}