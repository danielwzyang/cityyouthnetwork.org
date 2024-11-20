import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "City Youth Network",
    description: "Networking for the Youth.",
}

export default function Page() {
    return (
        <div>
            <Image
                src="/homepage.png"
                alt="homepage big image"
                width={2000}
                height={1125}
                className="md:aspect-[3/1] object-cover object-center"
            />
            <div className="flex flex-wrap justify-center">
                <a href="/branches"
                    className="group flex flex-col items-center justify-center w-[100%] sm:w-[50%] lg:w-[25%] aspect-[2/1] bg-red-300">
                    <h1 className="text-2xl group-hover:scale-[115%] transition leading-1">
                        Branches
                        <hr className="border-[#6D6E80] w-0 group-hover:w-full transition-all mx-auto" />
                    </h1>
                </a>
                <a href="/gallery"
                    className="group flex flex-col items-center justify-center w-[100%] sm:w-[50%] lg:w-[25%] aspect-[2/1] bg-orange-300">
                    <h1 className="text-2xl group-hover:scale-[115%] transition leading-1">
                        Gallery
                        <hr className="border-[#6D6E80] w-0 group-hover:w-full transition-all mx-auto" />
                    </h1>
                </a>
                <a href="/goal"
                    className="group flex flex-col items-center justify-center w-[100%] sm:w-[50%] lg:w-[25%] aspect-[2/1] bg-yellow-300">
                    <h1 className="text-2xl group-hover:scale-[115%] transition leading-1">
                        Our Goal
                        <hr className="border-[#6D6E80] w-0 group-hover:w-full transition-all mx-auto" />
                    </h1>
                </a>
                <a href="/partners"
                    className="group flex flex-col items-center justify-center w-[100%] sm:w-[50%] lg:w-[25%] aspect-[2/1] bg-green-300">
                    <h1 className="text-2xl group-hover:scale-[115%] transition leading-1">
                        Partners
                        <hr className="border-[#6D6E80] w-0 group-hover:w-full transition-all mx-auto" />
                    </h1>
                </a>
            </div>
        </div >
    )
}
