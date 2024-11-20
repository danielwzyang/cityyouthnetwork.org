import Events from "@/components/calendar"
import type { Metadata } from "next"
import "./calendarStyle.css"

export const metadata: Metadata = {
    title: "Upcoming Events",
    description: "Look ahead at our upcoming events!",
}

export default async function Page() {

    return (
        <div className="flex justify-center">
            <Events />
        </div>
    )
}
