import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
    return <Layout>
        <div className="flex flex-col items-center pb-10">
            <h1 className="text-center text-5xl sm:text-7xl font-extrabold grotesque mb-2">
                City Youth <br /> Network
            </h1>
            <h1 className="text-center text-xl sm:text-3xl font-bold mb-2 lighter">
                empowering nyc youth
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

        <div className="p-8 flex flex-col items-center mt-5">
            <div className="xl:hidden relative w-[425px] max-w-[80%] mb-16">
                <img src="/shape3.svg" alt="shape3" className="w-full slow-pulse-spin" />
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                    <h1 className="text-center text-3xl sm:text-5xl font-extrabold grotesque mb-2">
                        Our Programs
                    </h1>
                    <h2 className="w-[500px] font-medium text-lg sm:text-xl max-w-[80%] text-center text-balance lighter">
                        engaging and impactful opportunities for students
                    </h2>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-18 xl:gap-0 mx-8">
                <div className="relative w-[375px] max-w-[80%]">
                    <img src="/shape2.svg" alt="shape2" className="w-full slow-pulse-spin" />
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                        <h1 className="text-2xl sm:text-3xl font-bold grotesque text-center mb-1">
                            City Social
                        </h1>
                        <h2 className="lighter text-base sm:text-md mb-5">
                            Roy Zhang, February 2024
                        </h2>

                        <Link href="https://docs.google.com/document/d/1iLQa2PYaomOAxR9BlXeFcMVBQx1nr19zATvZzFQSDXE/" className="grotesque text-md sm:text-lg font-extrabold text-white">
                            <div className="py-3 px-5 bg-[#fbba39] rounded-xl hover:scale-[1.05] transition duration-300">
                                learn more
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="hidden xl:block relative w-[425px] max-w-[80%] m-[-50px] z-2">
                    <img src="/shape3.svg" alt="shape3" className="w-full slow-pulse-spin" />
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                        <h1 className="text-center text-3xl sm:text-5xl font-extrabold grotesque mb-2">
                            Our Programs
                        </h1>
                        <h2 className="w-[500px] font-medium text-lg sm:text-xl max-w-[80%] text-center text-balance lighter">
                            engaging and impactful opportunities for students
                        </h2>
                    </div>
                </div>

                <div className="relative w-[375px] max-w-[80%]">
                    <img src="/shape4.svg" alt="shape2" className="w-full slow-pulse-spin" />
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                        <h1 className="text-2xl sm:text-3xl font-bold grotesque text-center mb-1">
                            Opportunities Initiative
                        </h1>
                        <h2 className="lighter text-base sm:text-md mb-5">
                            Caleb Lee, February 2024
                        </h2>

                        <Link href="https://docs.google.com/document/d/1WU_aHsxh2VyxW1yb3lolloF0LSETUbjcnW8PpOLGwFI/" className="grotesque text-md sm:text-lg font-extrabold text-white">
                            <div className="py-3 px-5 bg-[#66b2ff] rounded-xl hover:scale-[1.05] transition duration-300">
                                learn more
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}