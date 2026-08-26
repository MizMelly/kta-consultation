import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import JoinTeam from "./pages/JoinTeam";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/PrivacyPolicy";
import AIAssistantDisclaimer from "./pages/AIAssistantDisclaimer";

import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />

        <Route path="/home" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/success-stories"
          element={<SuccessStories />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/join-team" element={<JoinTeam />} />

        {/* Legal Pages */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        <Route
          path="/ai-disclaimer"
          element={<AIAssistantDisclaimer />}
        />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />
        
        {/* Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;