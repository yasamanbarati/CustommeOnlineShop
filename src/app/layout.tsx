import { Navbar } from "@/components/pages/navbar_section";
import { ReduxProvider } from "@/setup/store/redux-provider";
import { ThemeProvider } from "@/setup/theme/theme-provider";
import NavbarAdvertising from "@/components/pages/navbar_section/navbar-advertising";
import "./globals.css";
import { Footer } from "@/components/pages/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <NavbarAdvertising/>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
