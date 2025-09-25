import { Link } from "react-router-dom";

function Home() {
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
    </div>
  );
}

export default Home;