import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <main className='bg-slate-300/20'>
      <Navbar />
      {currentPath === "/" && <Home />}
      {currentPath === "/about" && <About />}
      {currentPath === "/contact" && <Contact />}
      {currentPath === "/projects" && <Projects />}
      
      <Footer />
    </main>
  );
};

export default App;
