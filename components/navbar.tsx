"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "./sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import * as motion from "framer-motion/client"
import { useState } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

export default function Navbar() {
    const [opened, toggleMenu] = useState(false)

    return <div className="h-[90px] relative flex items-center justify-center px-5 space-x-6">
        <Link href="/" className="absolute left-5 sm:left-0 sm:relative"><Image src="/cyn500.png" alt="cyn icon" height={60} width={60} /></Link>
        <div className="hidden sm:flex gap-12 pr-3">
            <NavigationMenu delayDuration={0}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="pl-5">About</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <motion.div
                                className="flex flex-col px-5 bg-[#E9DCC9] rounded-lg"
                                initial={{ height: 0 }}
                                animate={{ height: 125 }}
                                transition={({ duration: 0.5 })}>
                                {
                                    [
                                        ["branches", "Branches"],
                                        ["gallery", "Gallery"],
                                        ["goal", "Our Goal"],
                                        ["partners", "Partners"],
                                    ]
                                        .map((e, i) => {
                                            return (
                                                <motion.div key={i}
                                                    className="flex"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 100 }}
                                                    transition={{ duration: 0.5, delay: i * 0.075 }}>
                                                    <Link href={`/${e[0]}`} className="text-xl hover:text-[#CFAEAE]">{e[1]}</Link>
                                                </motion.div>
                                            )
                                        })
                                }
                            </motion.div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href="/events" className="text-2xl hover:text-[#CFAEAE]">Events</Link>
            <Link href="/contact" className="text-2xl hover:text-[#CFAEAE]">Contact</Link>
            <Link href="/donate" className="text-2xl hover:text-[#CFAEAE]">Donate</Link>
        </div>
        <Sheet onOpenChange={(open) => toggleMenu(open)}>
            <SheetTrigger className="h-10 w-10 flex justify-center items-center absolute right-5 sm:hidden">
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={opened ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}>
                    <Menu />
                </motion.div>
            </SheetTrigger>
            <SheetContent className="mt-20 w-fit h-fit bg-transparent border-0 p-0 sm:hidden" onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col gap-1 bg-[#E9DCC9] pl-7 pr-5 pb-5 rounded-lg">
                    {
                        [
                            ["branches", "Branches"],
                            ["gallery", "Gallery"],
                            ["goal", "Our Goal"],
                            ["partners", "Partners"],
                            ["events", "Events"],
                            ["contact", "Contact"],
                            ["donate", "Donate"]
                        ]
                            .map((e, i) => {
                                return (
                                    <motion.div key={i}
                                        className="flex justify-end"
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.075 }}>
                                        <Link href={`/${e[0]}`} className="text-2xl hover:text-[#CFAEAE] text-right">{e[1]}</Link>
                                    </motion.div>
                                )
                            })
                    }
                </div>
            </SheetContent>
        </Sheet>
    </div>
}