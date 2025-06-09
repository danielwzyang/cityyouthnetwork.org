"use client"

import Layout from "@/components/layout"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Props {
    CALENDAR_ID: string
    API_KEY: string
}

const colors = []

export default function Client(props: Props) {
    const [events, setEvents] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchEvents() {
            const date = new Date()
            date.setHours(0, 0, 0, 0)

            const res = await fetch(
                `https://www.googleapis.com/calendar/v3/calendars/${props.CALENDAR_ID}/events?key=${props.API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${date.toISOString()}`
            )
            const data = await res.json()

            setEvents(data.items || [])
            setLoading(false)
        }

        fetchEvents()
    }, [])

    return <Layout>
        <div className="flex flex-col items-center mb-16">
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold grotesque mb-2">
                Upcoming Events
            </h1>

            <Link href="https://calendar.google.com/calendar/u/0?cid=MzZiZDlmNzQ4YzQyM2Y5ZTYwMTAzZDA3NWQ3OTI1ZDhiNjRhMzNhYTc3YjhlZDk1MWFjYzNjZGQ2NzlmMTNmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" className="lighter grotesque text-lg sm:text-xl font-medium underline-hover">
                add to calendar
            </Link>

            <h2 className="lighter text-xs sm:text-sm mt-2">
                (click events for more info)
            </h2>
        </div>

        <div className="flex flex-wrap items-center mx-10 justify-center gap-12">
            {
                loading ? (
                    <h1>loading...</h1>
                ) : (
                    events.length == 0 ? (
                        <h1>no upcoming events :(</h1>
                    ) : (
                        events.map((event, i) => {
                            return <div key={i} className="flex flex-col items-center">
                                <div className="relative w-fit">
                                    <img src={`/shape${i % 7}.svg`} alt="shape" className="w-full slow-pulse-spin" />

                                    <Link href={event.htmlLink}>
                                        <div className="absolute inset-0 p-10 flex flex-col items-center justify-center">
                                            <h1 className="text-xl sm:text-2xl font-bold grotesque text-center mb-1">
                                                {event.summary}
                                            </h1>

                                            <h2 className="text-base sm:text-md mb-2">
                                                {event.start?.dateTime
                                                    ? new Date(event.start.dateTime).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })
                                                    : new Date(event.start?.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })
                                                }
                                            </h2>

                                            {event.description && <p className="text-base sm:text-md truncate w-full px-8 mb-5">{event.description}</p>}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        })
                    )
                )
            }
        </div>
    </Layout>
}