import Image from "next/image"
import Layout from "../../components/layout"

const images = [
    "/gallery/iceskating/1.jpg",
    "/gallery/iceskating/2.jpg",
    "/gallery/iceskating/3.jpg",
    "/gallery/iceskating/4.jpg",
    "/gallery/iceskating/5.jpg",

    "/gallery/sda/1.jpg",
    "/gallery/sda/2.jpg",
    "/gallery/sda/3.jpg",
    "/gallery/sda/4.jpg",
    "/gallery/sda/5.jpg",
    "/gallery/sda/6.jpg",
    "/gallery/sda/7.jpg",

    "/gallery/sixflags/1.jpg",
    "/gallery/sixflags/2.jpg",
    "/gallery/sixflags/3.jpg",
    "/gallery/sixflags/4.jpg",

    "/gallery/wollman/1.jpg",
    "/gallery/wollman/2.jpg",

    "/gallery/stjude/1.jpg",
    "/gallery/stjude/2.jpg",

    "/gallery/roosevelt/1.jpg",
    "/gallery/roosevelt/2.jpg",
    "/gallery/roosevelt/3.jpg",
]

export default function Gallery() {
    return <Layout>
        <div className="p-8 w-full">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {images.map((src, i) => (
                    <div key={i} className="w-full relative rounded">
                        <Image
                            src={src}
                            alt={src}
                            width={600}
                            height={400} 
                            className="rounded block w-full mb-5"
                        />
                    </div>
                ))}
            </div>
        </div>
    </Layout>
}