import { getCalendar, setAuth } from "../auth"

export async function GET() {
    setAuth()
    const calendar = await getCalendar()
    try {
        const response = await calendar.events.list({
            calendarId: "36bd9f748c423f9e60103d075d7925d8b64a33aa77b8ed951acc3cdd679f13f4@group.calendar.google.com"
        })

        return new Response(JSON.stringify({ events: response.data.items }), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ message: "Error fetching events." }), { status: 500 })
    }
}