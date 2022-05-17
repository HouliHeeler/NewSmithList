import React from "react"
import logo from "../images/vector/default-monochrome.svg"

export default function Header() {
    return(
        <header>
            <img className="logo" src={logo} alt="SmithList Logo"/>
            <i className="fa-solid fa-clipboard-list"></i>
        </header>
    )
}