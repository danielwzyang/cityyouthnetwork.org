import type { Metadata } from "next"
import ClientPage from "./clientPage"

export const metadata: Metadata = {
    title: "Newsletter",
    description: "Keep in touch by subscribing to our newsletter!",
}

export default function Page() {
    return <ClientPage />
}