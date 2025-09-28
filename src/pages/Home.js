import { Link } from "react-router-dom"
import recipesData from "../data/recipes.json"

function getRandomRecipe(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function getTrendingRecipes(list, count = 4) {
    const shuffled = [...list].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

const trendingRecipes = getTrendingRecipes(recipesData, 4)

function Home() {

    const dishOfDay = getRandomRecipe(recipesData)
    const dishOfWeek = getRandomRecipe(recipesData)
    const dishOfMonth = getRandomRecipe(recipesData)
    const suggestedDish = getRandomRecipe(recipesData)

    return (
        <div className="home-page">
            <div className="hero" id="homepage-hero">
                <div className="overlay"></div>
                <div className="hero-text" style={{ position: "relative", zIndex: 1 }}>
                    <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
                        Cook Smart, Eat Better
                    </h1>
                    <p style={{ fontSize: "1.5rem", marginBottom: "2.5rem" }}>
                        Discover recipes made just for you.
                    </p>
                    <Link to="/recipes" className="cta-btn">Explore Recipes</Link>
                </div>
            </div>

            <section className="categories-section">
                <h2>Explore by Categories</h2>
                <p className="categories-subtitle">
                    Find the perfect recipe for every moment
                </p>
                <div className="categories-grid">
                    <Link to="/recipes" state={{ category: "breakfast" }} className="category-card" style={{backgroundImage: "url('assets/breakfast.png')"}}>
                        <span>Breakfast</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "dinner" }} className="category-card" style={{backgroundImage: "url('assets/dinner.png')"}}>
                        <span>Dinner</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "dessert" }} className="category-card" style={{backgroundImage: "url('assets/dessert.png')"}}>
                        <span>Dessert</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "drink" }} className="category-card" style={{backgroundImage: "url('assets/drink.png')"}}>
                        <span>Drinks</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "vegan" }} className="category-card" style={{backgroundImage: "url('assets/vegan.png')"}}>
                        <span>Vegan</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "seafood" }} className="category-card" style={{backgroundImage: "url('assets/seafood.png')"}}>
                        <span>Seafood</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "snack" }} className="category-card" style={{backgroundImage: "url('assets/snack.png')"}}>
                        <span>Snacks</span>
                    </Link>
                    <Link to="/recipes" state={{ category: "soup" }} className="category-card" style={{backgroundImage: "url('assets/soups.png')"}}>
                        <span>Soup</span>
                    </Link>
                </div>
            </section>

            <section className="featured-section">
                <h2 className="featured-title">Chef's Picks</h2>
                <p className="featured-subtitle">Discover today's highlighted recipes</p>

                <div className="featured-grid">
                    <div className="featured-card featured-day" style={{ backgroundImage: `url(${dishOfDay.image})` }}>
                        <div className="overlay"></div>
                        <div className="content">
                            <h3>Recipe of the Day</h3>
                            <p>{dishOfDay.title}</p>
                            <Link to="/recipes" state={{ id: dishOfDay.id }} className="btn-primary">Cook Now</Link>
                        </div>
                    </div>

                    <div className="featured-card" style={{ backgroundImage: `url(${dishOfWeek.image})` }}>
                        <div className="overlay"></div>
                        <div className="content">
                            <h3>Recipe of the Week</h3>
                            <p>{dishOfWeek.title}</p>
                            <Link to="/recipes" state={{ id: dishOfWeek.id }} className="btn-primary">Explore</Link>
                        </div>
                    </div>

                    <div className="featured-card" style={{ backgroundImage: `url(${dishOfMonth.image})` }}>
                        <div className="overlay"></div>
                        <div className="content">
                            <h3>Recipe of the Month</h3>
                            <p>{dishOfMonth.title}</p>
                            <Link to="/recipes" state={{ id: dishOfMonth.id }} className="btn-primary">Try It</Link>
                        </div>
                    </div>

                    <div className="featured-card for-you" style={{ backgroundImage: `url(${suggestedDish.image})` }}>
                        <div className="overlay"></div>
                        <div className="content">
                            <h3>Suggested for You</h3>
                            <p>{suggestedDish.title}</p>
                            <Link to="/recipes" state={{ id: suggestedDish.id }} className="btn-primary">Try It</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending-section">
                <h2 className="trending-title">Trending Now</h2>
                <p className="trending-subtitle">
                    What everyone's cooking & loving this week
                </p>

                <div className="trending-grid">
                    {trendingRecipes.map((recipe, index) => (
                        <div key={recipe.id} className="trending-card" style={{ backgroundImage: `url(${recipe.image})` }}>
                            <div className="overlay"></div>
                            <div className="ranking-badge">#{index + 1}</div>
                            <div className="content">
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                                <Link to="/recipes" state={{ id: recipe.id }} className="btn-primary">
                                    Cook This
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home