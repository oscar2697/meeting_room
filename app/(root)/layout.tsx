import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app",
    icons: { icon: '/icons/logo.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ClerkProvider>
                <body className={`${geistSans.className} bg-dark-2`}>
                    {children}
                    <Toaster />
                </body>
            </ClerkProvider>
        </html>
    );
}