import './App.css';
import LowerNavbar from './layout/LowerNavbar/LowerNavbar';
import Footer from './layout/footer/Footer.js';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cotisation from './pages/Cotisation'
import Attestations from './pages/Attestations'
import Documents from './pages/Documents';
import Garde from "./pages/Garde"
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription'

function App() {
  return (
    <>
      <Router>
        <LowerNavbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Inscription />} text="Inscription" />
            <Route path="/Connexion" element={<Connexion />} text="Connexion" />
            <Route path="/Cotisation" element={<Cotisation />} text="Cotisation" />
            <Route path="/Documents" element={<Documents />} />
            <Route path="/Attestations" element={<Attestations />} />
            <Route path="/Garde" element={<Garde />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Profile" element={<Profile />} />

          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
