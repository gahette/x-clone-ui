import './globals.css'
import {Metadata} from "next";
import {ClerkProvider} from "@clerk/nextjs";


export const metadata: Metadata = {
    title: "Lama Dev X Clone",
    description: "Next.js social media application project",
}

export default function AppLayout({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
            <body>
            {children}
            </body>
            </html>
        </ClerkProvider>

    )
}