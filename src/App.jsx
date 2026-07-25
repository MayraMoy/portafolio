import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Projects from "./pages/Project/Projects";
import Education from "./pages/Educacion/Educacion";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Education></Education>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;