import { AuthProvider } from "@/auth/context";
import "../global.css";

import { MotionLazy } from "@/components/animate/motion-lazy";
import ProgressBar from "@/components/progress-bar";
import { SnackbarProvider } from "@/components/snackbar";
import ThemeProvider from "@/theme";
import { primaryFont } from "@/theme/typography";
import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { ReactQueryProvider } from "@/components/react-query";

export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: "Funglish",
    description: "Funglish panel",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" className={primaryFont.className}>
            <body>
                <ThemeProvider>
                    <SnackbarProvider>
                        <ReactQueryProvider>
                            <AuthProvider>
                                <MotionLazy>
                                    <ProgressBar />
                                    {children}
                                </MotionLazy>
                            </AuthProvider>
                        </ReactQueryProvider>
                    </SnackbarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
