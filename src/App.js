import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import RecipeCard from './pages/Card'; //this import isn't being used yet. Delete?
import Recipes from './pages/Recipes';
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider> {/* <== This is the darkmode, so it has to wrap everything*/}
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </main>
      <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
