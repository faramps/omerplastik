import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";
import ProviderLang from "../components/provider/ProviderLang";
import SplashScreen from "@/components/SplashScreen";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ömer Plastik ",
  description: "Ömer Plastik - Granül ve Geridönüşüm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      
      <body className={`${geistSans.variable} ${geistMono.variable } antialiased flex flex-col min-h-screen scroll-smooth`}>
        <Analytics />
         <ThemeProvider attribute="class" enableSystem defaultTheme="light"  disableTransitionOnChange>
        <SplashScreen>
       
          <ProviderLang>
            <Header />
            <main className="flex-grow overflow-x-hidden">{children}</main>
            <Footer />
          </ProviderLang>
        </SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
