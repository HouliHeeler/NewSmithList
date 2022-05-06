import React from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import data from "./data"
import "./App.css"

export default function App() {
  const card = data.map(item => {
    return(
      <Location 
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
    <div>
      <Header />
      <section>
        {card}
      </section>
    </div>
  )
}
