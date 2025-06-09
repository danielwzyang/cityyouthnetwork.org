import { JSX } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function Layout(props: Props) {
    return <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
}