//Global style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router
import { Route, Routes, useLocation} from "react-router-dom";
import MovieDetails from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AnimatePresence mode="wait" onExitComplete={() => { window.scrollTo(0,0)}}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="work" exact element={<OurWork />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="work/:id" element={<MovieDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
