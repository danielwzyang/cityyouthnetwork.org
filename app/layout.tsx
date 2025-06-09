import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const space_grotesk = Space_Grotesk({
    variable: "--font-grotesk",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "City Youth Network",
    description: "Empowering NYC youth.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${space_grotesk.variable} antialiased max-w-full overflow-x-clip`}
            >
                {children}
            </body>
        </html>
    )
}
