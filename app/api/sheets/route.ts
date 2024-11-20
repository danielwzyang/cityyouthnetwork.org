import { getSheets } from "../auth"

export async function POST(request: Request) {
    const sheets = await getSheets()
    
    try {
        const { email } = await request.json()

        const spreadsheetId = "13JqeWh9fBG3exQvP8HrZV_aUSXoPFWZSdCGd3Q3z5Uw"
        const range = "List!A2:A"

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range
        })

        const emails = response.data.values || []
        const exists = emails.some((row) => row[0] === email)

        if (exists) return new Response(JSON.stringify({ message: "Email already subscribed." }), { status: 500 })

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "RAW",
            requestBody: {
                values: [[email]]
            }
        })

        return new Response(JSON.stringify({ message: "Successfully subscribed!" }), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ message: "Error subscribing." }), { status: 500 })
    }
}