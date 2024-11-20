
export async function GET() {
    try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR}/events?key=${process.env.API_KEY}`)
        
        const data = await response.json()

        return new Response(JSON.stringify({ events: data.items }), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ message: "Error fetching events." }), { status: 500 })
    }
}