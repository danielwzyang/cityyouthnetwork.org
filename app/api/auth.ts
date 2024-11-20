import { GoogleAuth } from "google-auth-library"
import { google, sheets_v4 } from "googleapis"

let auth: GoogleAuth
let sheets: sheets_v4.Sheets

export async function setAuth() {
    if (!auth) {
        auth = new google.auth.GoogleAuth({
            credentials: {
                private_key: process.env.PRIVATE_KEY,
                client_email: process.env.EMAIL
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })

        sheets = google.sheets({ version: "v4", auth })
    }
}

export async function getSheets() {
    setAuth()
    return sheets
}