//Global style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="work" exact element={<OurWork />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="work/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
