import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
// import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
          {/* Home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       {/*  <Route path="/services" element={<Services />} />
        <Route path="/success-stories" element={<SuccessStories />} />*/}
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;