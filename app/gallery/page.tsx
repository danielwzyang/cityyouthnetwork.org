import Image from "next/image"
import Layout from "@/components/layout"

export default function Gallery() {
    return <Layout>
        <div className="pb-5">
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold grotesque mb-2">
                Gallery
            </h1>
        </div>

        <div className="relative w-full h-[80vh] overflow-hidden">
            <Image
                src="/cover.png"
                alt="cover"
                fill
                className="object-cover"
                priority
            />

            <svg
                className="absolute top-0 left-0 w-full h-16"
                viewBox="0 0 1440 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,50 C320,0 640,100 960,50 C1280,0 1600,100 1920,50 L1920,0 L0,0 Z"
                    fill="#f2f1ea"
                />
            </svg>

            <svg
                className="absolute bottom-0 left-0 w-full h-24"
                viewBox="0 0 1920 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,70 C320,120 640,20 960,70 C1280,120 1600,20 1920,70 L1920,120 L0,120 Z"
                    fill="#f2f1ea"
                />
            </svg>
        </div>

        <div className="p-8 flex flex-col items-center">
        </div>
    </Layout>
}