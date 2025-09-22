import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import RecipeCard from './pages/Card';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/recipes" element={<h1>Recipes Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>

        <div style={{ height: '200vh' }}></div> {/*These are here for testing the scrolling effects*/}
        <h1>This is the bottom of the page.</h1>
        <div className='cards-container'>
        <RecipeCard 
          image="/assets/icecream.png"
          title="Vanilla Ice Cream" 
          categories={["Dessert", "Healthy"]}
          description="Delicious homemade ice cream with natural flavors."
          servings={2}
        />

        <RecipeCard 
          image="/assets/pizza.png" 
          title="Margherita Pizza" 
          categories={["Vegetarian", "Italian", "Cheesy"]}
          description="Classic pizza topped with fresh mozzarella, basil, and tomatoes."
          servings={4}
        />

        <RecipeCard 
          image="/assets/salad.png" 
          title="Greek Salad" 
          categories={["Healthy", "Gluten Free", "Fresh"]}
          description="A refreshing salad with feta, cucumber, olives, and tomatoes."
          servings={3}
        />

        <RecipeCard 
          image="/assets/pasta.png" 
          title="Spaghetti Carbonara" 
          categories={["Italian", "Creamy", "Comfort Food"]}
          description="Traditional Roman pasta made with eggs, cheese, pancetta, and pepper."
          servings={2}
        />

        <RecipeCard 
          image="/assets/burger.png" 
          title="Beef Burger" 
          categories={["American", "Juicy", "Cheesy"]}
          description="Grilled beef patty with melted cheese, lettuce, and tomato in a toasted bun."
          servings={1}
        />

        <RecipeCard 
          image="/assets/cake.png" 
          title="Chocolate Cake" 
          categories={["Dessert", "Sweet", "Rich"]}
          description="Moist chocolate cake layered with creamy chocolate ganache."
          servings={6}
        />

        <RecipeCard 
          image="/assets/soup.png" 
          title="Tomato Basil Soup" 
          categories={["Vegetarian", "Comfort Food", "Warm"]} 
          description="A creamy tomato soup simmered with fresh basil and served hot." 
          servings={2} 
        />

        <RecipeCard 
          image="/assets/sushi.png" 
          title="Sushi Rolls" 
          categories={["Japanese", "Seafood", "Fresh"]} 
          description="Delicate rolls filled with rice, nori, and fresh fish or veggies." 
          servings={4} 
        />
        </div>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
