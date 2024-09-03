import { ReduxProvider } from "@/setup/store/redux-provider";
import { ThemeProvider } from "@/setup/theme/theme-provider";
import { ReactQueryProvider } from "@/components/react-query";
import { MotionLazy } from "@/components/animate/motion-lazy";
import NavbarAdvertising from "@/components/UI/navbar_section/navbar-advertising";
import { Navbar } from "@/components/UI/navbar_section";
import { Footer } from "@/components/UI/footer/footer";
import "./globals.css";
import { initializeAppData } from "@/services/servers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  initializeAppData()
  return (
    <html>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <ReactQueryProvider>
              <MotionLazy>
                <NavbarAdvertising />
                <Navbar />
                {children}
                <Footer />
              </MotionLazy>
            </ReactQueryProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
