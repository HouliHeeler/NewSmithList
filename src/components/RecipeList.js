import React from "react"

export default function RecipeList() {
    return(
        <div className="recipe--list">
            <div className="dropdown">
                <label for="cuisines"></label>
                <select name="cuisines" id="cuisines" style={{width: "22vw"}}>
                    <option value="AroundtheWorld">Around the World</option>
                    <option value="Indian">Indian</option>
                    <option value="Thai">Thai</option>
                    <option value="Mexican">Mexican</option>
                </select>
            </div>
            <div className="search">
                <input placeholder="Search..." type="search" required></input>
            </div>
        </div>
    )
}