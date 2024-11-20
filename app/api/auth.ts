import { GoogleAuth } from "google-auth-library"
import { calendar_v3, google, sheets_v4 } from "googleapis"

let auth: GoogleAuth
let sheets: sheets_v4.Sheets
let calendar: calendar_v3.Calendar

export async function setAuth() {
    if (!auth) {
        auth = new google.auth.GoogleAuth({
            credentials: {
                private_key: process.env.PRIVATE_KEY,
                client_email: process.env.EMAIL
            },
            scopes: ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/spreadsheets"]
        })

        sheets = google.sheets({ version: "v4", auth })
        calendar = google.calendar({ version: "v3", auth })
    }
}

export async function getSheets() {
    return sheets
}

export async function getCalendar() {
    return calendar
}