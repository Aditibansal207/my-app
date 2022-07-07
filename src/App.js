import './App.css';
import Blog from './compo/Blog';
import Footer from './compo/Footer';
import Navbar from './compo/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
function App() {
  return (
    <div style={{backgroundColor:"rgb(212, 163, 49)"}}>
      
      
      <Router>
      <Navbar/>
      <Routes>
            <Route
              exact
              path="/"
              element={
                <Blog/>
              }
            />
      
     </Routes>
     <Routes>
            <Route
              exact
              path="/about"
              element={
                <About/>
              }
            />
      
     </Routes>
        </Router>
    <Footer/>
    </div>
  );
}

export default App;