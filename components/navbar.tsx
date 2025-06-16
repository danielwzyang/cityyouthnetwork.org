import Link from "next/link"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu"

export default function Navbar() {
    return (
        <div className="p-5 items-center gap-10 mx-2 relative flex">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
            </Link>

            <div className="hidden md:flex w-full">
                <div className="flex gap-10">
                    <Link href="/gallery" className="grotesque text-xl font-medium underline-hover">
                        gallery
                    </Link> 
                    <Link href="/events" className="grotesque text-xl font-medium underline-hover">
                        events
                    </Link>
                </div>

                <Link href="/contact" className="grotesque text-xl font-medium underline-hover ml-auto mr-2">
                    contact us
                </Link>
            </div>

            <div className="md:hidden flex items-center w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-auto p-2 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-20 bg border grotesque bg-transparent"
                        align="end"
                        side="bottom"
                    >
                        <DropdownMenuItem>
                            <Link href="/gallery" className="ml-auto text-lg">gallery</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/events" className="ml-auto text-lg">events</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/contact" className="ml-auto text-lg">contact us</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
