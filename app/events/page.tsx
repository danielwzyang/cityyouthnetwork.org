import Client from "./client"

export default function Events() {
    return <>
        <Client CALENDAR_ID={process.env.CALENDAR_ID || ""} API_KEY={process.env.API_KEY || ""} />
    </>
}