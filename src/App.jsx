import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import Blog from './pages/Blog';
import CreateCustom from './pages/CreateCustom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index.html" element={<Index />} />
        <Route path="/about-us.html" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/packages.html" element={<Packages />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery.html" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-now.html" element={<BookNow />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create-custom.html" element={<CreateCustom />} />
        <Route path="/create-custom" element={<CreateCustom />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions.html" element={<TermsAndConditions />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-of-service.html" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
