import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import recipesData from "../data/recipes.json";
import Select from "react-select";

function Recipes() {
  const cardsRef = useRef(null)

  const location = useLocation()
  const initialCategory = location.state?.category || "All"

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(initialCategory)
  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage = 12

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

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category)
    }
  }, [location.state])

  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "All" || recipe.categories.includes(category)
    return matchesSearch && matchesCategory
  })

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [search, category])

  useEffect(() => {
    if (cardsRef.current) {
      const topPosition = cardsRef.current.offsetTop - 20
      window.scrollTo({ top: topPosition, behavior: "smooth" })
    }
  }, [currentPage])

  return (
    <div className="recipes-page" id="recipes-page">
      <div className="hero">
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}></div>
        <div className="hero-text" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Discover Delicious Recipes</h1>
          <p style={{ fontSize: "1.5rem" }}>Find your next favourite meal, quick and easy</p>
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
                  boxShadow: state.isFocused ? "0 0 5px rgba(255,102,0,0.4)" : "none",
                  "&:hover": { borderColor: "#ff6600" }
                }),
                menu: (base) => ({ ...base, marginTop: "5px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }),
                option: (base, state) => ({
                  ...base,
                  padding: "10px 15px",
                  cursor: "pointer",
                  backgroundColor: state.isSelected ? "#ff6600" : state.isFocused ? "#ffe0cc" : "white",
                  color: state.isSelected ? "white" : "#333",
                  "&:active": { backgroundColor: "#ff6600", color: "white" }
                }),
                dropdownIndicator: (base, state) => ({
                  ...base,
                  color: state.isFocused ? "#ff6600" : "#888",
                  "&:hover": { color: "#ff6600" }
                }),
                placeholder: (base) => ({ ...base, color: "#aaa" })
              }}
            />
          </div>
        </div>
      </div>

      <div className="cards-container" ref={cardsRef}>
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe) => (
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
          <div className="no-results-card">
            <h2>Oops! No recipes found</h2>
            <p>Try a different search or category to find your next favourite meal.</p>
            <button onClick={() => { setSearch(""); setCategory("All")}}>Show All Recipes</button>
          </div>
        )}
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i+1}
            onClick={() => setCurrentPage(i+1)}
            className={currentPage === i+1 ? "active" : ""}
          >
            {i+1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  )
}

export default Recipes