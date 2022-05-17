import React from "react"
import "./App.css"
import Header from "./components/Header"
import RecipeDisplay from "./components/RecipeDisplay"
import RecipeList from "./components/RecipeList"
import WeeklyMenu from "./components/WeeklyMenu"

export default function App() {
  return(
    <main>
      <Header />
      <section className="main--content">
        <div className="user--selections">
          <WeeklyMenu />
          <RecipeDisplay />
        </div>
        <div className="recipes">
          <RecipeList />
        </div>
      </section>
    </main>
  )
}