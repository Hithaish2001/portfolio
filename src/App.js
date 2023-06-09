import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
  <>
    <div className="app dark:bg-black-gray bg-white">
      <Navbar/>
      <Home/>
      <About/> 
      <Project/>
      <Contact/>
    </div>
  </>
  );
}

export default App;
