import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router basename="/sneaker-hub">
      <div className="min-h-screen flex flex-col">
        {/* Shared Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
