import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Recipes from './pages/Recipes';
import Home from './pages/Home';
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider> {/* <== This is the darkmode, so it has to wrap everything*/}
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Home />} /> {/*will edit this later*/}
        </Routes>
      </main>
      <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
