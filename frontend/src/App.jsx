// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InquiryPage from './pages/Inquiry';
import RetailSpacePage from "./pages/Space";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/spaces" element={<RetailSpacePage />} />
        <Route path="/inquiries" element={<InquiryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
