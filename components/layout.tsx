import { JSX } from "react"
import Navbar from "./navbar"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function Layout(props: Props) {
    return <div className="mb-20">
        <Navbar />
        {props.children}
    </div>
}