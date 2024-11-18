import { Open_Sans } from "next/font/google"
import { Crimson_Pro } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const open_sans = Open_Sans({ subsets: ["latin"] })
const crimson_pro = Crimson_Pro({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${open_sans.className} ${crimson_pro.className} bg-[#E9DCC9] text-[#6D6E80] mb-5`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
