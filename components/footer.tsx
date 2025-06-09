import Link from "next/link"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu"

export default function Footer() {
    return (
        <div className="p-5 items-center gap-5 relative flex mt-5 border">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
            </Link>

            <h1>
                cyn © {new Date().getFullYear()}
            </h1>
        </div>
    )
}
