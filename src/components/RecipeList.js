import React from "react"

export default function RecipeList() {
    return(
        <div className="recipe--list">
            <label for="cuisines"></label>
            <select name="cuisines" id="cuisines">
            <option value="AroundtheWorld">Around the World</option>
            <option value="Indian">Indian</option>
            <option value="Thai">Thai</option>
            <option value="Mexican">Mexican</option>
            </select> 
        </div>
    )
}