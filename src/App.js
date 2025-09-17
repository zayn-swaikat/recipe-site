import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';

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
        
      </main>
    </Router>
  );
}

export default App;
