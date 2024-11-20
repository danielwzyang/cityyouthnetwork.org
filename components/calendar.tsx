"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { useEffect, useState } from "react"

interface Event {
    start: {
        date: string,
        dateTime: string
    },
    summary: string
}

export default function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch("/api/events", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const data = await response.json()

            const eventList = data.events.map((( e: Event ) => {
                const date = e.start.date || e.start.dateTime.substring(0, 10)

                return { title: e.summary, date }
            }))

            setEvents(eventList)
        }

        fetchEvents()
    }, [])

    return <div className="w-[80vw] max-w-[1000px]">
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            fixedWeekCount={false}
            contentHeight="auto"
            headerToolbar={{
                right: "prev,next"
            }}
        />
    </div>
}