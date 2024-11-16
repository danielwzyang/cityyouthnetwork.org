import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Error 404",
    description: "Page not found.",
}

export default function Page() {
    return (
        <div className="h-[70vh] flex justify-center items-center">
            <h2 className="text-3xl">Page not found.</h2>
        </div>
    )
}