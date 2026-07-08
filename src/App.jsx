import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index.html" element={<Index />} />
        
        {/* About Us / Our Story */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us.html" element={<AboutUs />} />
        <Route path="/our-story" element={<AboutUs />} />
        <Route path="/our-story.html" element={<AboutUs />} />
        
        {/* Packages / Collections */}
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages.html" element={<Packages />} />
        <Route path="/collections" element={<Packages />} />
        <Route path="/collections.html" element={<Packages />} />
        
        {/* Gallery / Portfolio */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery.html" element={<Gallery />} />
        <Route path="/portfolio" element={<Gallery />} />
        <Route path="/portfolio.html" element={<Gallery />} />
        
        {/* Book Now / Reserve */}
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/book-now.html" element={<BookNow />} />
        <Route path="/reserve" element={<BookNow />} />
        <Route path="/reserve.html" element={<BookNow />} />
        
        {/* Blog / Journal */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/journal.html" element={<Blog />} />
        
        {/* Create Custom / Bespoke */}
        <Route path="/create-custom" element={<CreateCustom />} />
        <Route path="/create-custom.html" element={<CreateCustom />} />
        <Route path="/bespoke" element={<CreateCustom />} />
        <Route path="/bespoke.html" element={<CreateCustom />} />
        
        {/* Policy Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-and-conditions.html" element={<TermsAndConditions />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/terms-of-service.html" element={<TermsOfService />} />
        
        {/* Fallback */}
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
