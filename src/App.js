import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import RecipeCard from './pages/Card';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
