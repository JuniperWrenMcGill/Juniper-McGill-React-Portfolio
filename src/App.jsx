import './App.css'; // Importing your CSS file
import Navbar from './components/navbar/navbar'; // Importing the Navbar component
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from './components/aboutme/about'; // Importing the AboutMe component
import Projects from './components/projects/project'; // Importing the Projects component
import Footer from './components/footer/footer'; // Importing the Footer component
import Home from './components/home/home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<AboutMe />} />
        <Route exact path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
