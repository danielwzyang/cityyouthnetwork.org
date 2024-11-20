"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { useEffect, useState } from "react"

interface Event {
    start: {
        date: string
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
                return { title: e.summary, date: e.start.date }
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