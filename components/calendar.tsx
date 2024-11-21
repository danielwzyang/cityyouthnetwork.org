"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./dialog"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

interface Event {
    start: {
        date: string,
        dateTime: string
    },
    summary: string,
    description: string
}

export default function Events() {
    const [events, setEvents] = useState([])
    const [open, setOpen] = useState(false)
    const [curEvent, setEvent] = useState({ title: "", desc: "", time: "" })

    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch("/api/events", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const data = await response.json()

            const eventList = data.events.map(((e: Event) => {
                const date = e.start.date || e.start.dateTime.substring(0, 10)
                const eventTime = e.start.dateTime ? e.start.dateTime.substring(11, 16) : ""
                const desc = e.description || "no description"

                return { title: e.summary, date, desc, eventTime }
            }))

            setEvents(eventList)
        }

        fetchEvents()
    }, [])

    return <div className="w-[80vw] max-w-[1000px]">
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
            events={events}
            fixedWeekCount={false}
            contentHeight="auto"
            headerToolbar={{
                right: "prev,next"
            }}
            eventClick={(info) => {
                const event = info.event
                const props = event.extendedProps
                const time = props.eventTime ? dayjs(props.eventTime, "HH:mm").format("h:mm A") : ""
                setOpen(true)
                setEvent({ title: event.title, desc: props.desc, time })
            }}
            initialView={window.innerWidth < 700 ? "listMonth" : "dayGridMonth"}
            displayEventTime={false}
            views={{
                listMonth: {
                    type: "listWeek",
                    duration: { days: 30 }
                }
            }}
        />
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[300px] rounded-xl gap-0 bg-[#E9DCC9]">
                <DialogTitle>{curEvent.title}</DialogTitle>
                <h1 className="mb-2">{curEvent.time}</h1>
                <DialogDescription>{curEvent.desc}</DialogDescription>
            </DialogContent>
        </Dialog>
    </div>
}