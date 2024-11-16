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

    return <div className="h-[90px] relative flex items-center justify-center px-5">
        <Link href="/" className="absolute left-5 sm:relative"><Image src="/cyn500.png" alt="cyn icon" height={60} width={60} /></Link>
        <div className="hidden sm:flex gap-10 ml-16">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex flex-col">
                                {
                                    [
                                        ["branches", "Branches"],
                                        ["gallery", "Gallery"],
                                        ["goal", "Our Goal"],
                                        ["partnerships", "Partnerships"],
                                    ]
                                        .map((e, i) => {
                                            return (
                                                <motion.div key={i}
                                                    className="flex"
                                                    initial={{ x: "50%", opacity: 0 }}
                                                    animate={{ x: 0, opacity: 100 }}
                                                    transition={{ duration: 0.5, delay: i * 0.075 }}>
                                                    <Link href={`/${e[0]}`} className="text-2xl hover:text-[#CFAEAE] w-[150px]">{e[1]}</Link>
                                                </motion.div>
                                            )
                                        })
                                }
                            </div>
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
            <SheetContent className="mt-20 w-fit h-fit bg-transparent border-0 p-0 pr-8 sm:hidden" onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col gap-1 bg-transparent">
                    {
                        [
                            ["branches", "Branches"],
                            ["gallery", "Gallery"],
                            ["goal", "Our Goal"],
                            ["partnerships", "Partnerships"],
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