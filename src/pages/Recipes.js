import { useState } from "react";
import Card from "./Card";
import recipesData from "../data/recipes.json";
import Select from "react-select";

function Recipes() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const options = [
    { value: "All", label: "All" },
    { value: "dinner", label: "Dinner"},
    { value: "dessert", label: "Dessert" },
    { value: "healthy", label: "Healthy" },
    { value: "breakfast", label: "Breakfast" },
    { value: "drink", label: "Drink" },
    { value: "vegan", label: "Vegan"},
    { value: "seafood", label: "Seafood"},
    { value: "soup", label: "Soup"},
    { value: "snack", label: "Snack"}
  ]

  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      category === "All" || recipe.categories.includes(category)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="recipes-page">
      <div className="hero">
        <h1>Discover Delicious Recipes</h1>
        <p>Find your next favourite meal, quick and easy.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-select">
        <Select
            options={options}
            defaultValue={options[0]}
            onChange={(selected) => setCategory(selected.value)}
            styles={{
                control: (base, state) => ({
                ...base,
                width: "10rem",
                borderRadius: "10px",
                padding: "2px 6px",
                borderColor: state.isFocused ? "#ff6600" : "#ddd",
                boxShadow: state.isFocused ? "0 0 5px rgba(255, 102, 0, 0.4)" : "none",
                "&:hover": {
                    borderColor: "#ff6600"
                }
                }),
                menu: (base) => ({
                ...base,
                marginTop: "5px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }),
                option: (base, state) => ({
                ...base,
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: state.isSelected
                    ? "#ff6600"
                    : state.isFocused
                    ? "#ffe0cc"
                    : "white",
                color: state.isSelected ? "white" : "#333",
                "&:active": {
                    backgroundColor: "#ff6600",
                    color: "white"
                }
                }),
                dropdownIndicator: (base, state) => ({
                ...base,
                color: state.isFocused ? "#ff6600" : "#888",
                "&:hover": {
                    color: "#ff6600"
                }
                }),
                placeholder: (base) => ({
                ...base,
                color: "#aaa",
                })
            }}
            />

        </div>
      </div>

      <div className="cards-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              categories={recipe.categories}
              description={recipe.description}
              servings={recipe.servings}
            />
          ))
        ) : (
          <p className="no-results">No recipes found</p>
        )}
      </div>
    </div>
  );
}

export default Recipes