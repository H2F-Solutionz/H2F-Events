import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CreateCustom() {
  const navigate = useNavigate();

  // Selections State
  const [backdrop, setBackdrop] = useState('round');
  const [color, setColor] = useState('white');
  const [flowers, setFlowers] = useState('rose');
  const [decoElements, setDecoElements] = useState(['fairy lights']);
  const [pathway, setPathway] = useState('candle-lit pathway');
  const [addOns, setAddOns] = useState(['Photography']);
  const [liveMusic, setLiveMusic] = useState('yes');
  const [guests, setGuests] = useState('10–20');
  const [venue, setVenue] = useState('Beach');
  const [area, setArea] = useState('Jaffna');
  const [experiences, setExperiences] = useState(['drone coverage']);
  const [animals, setAnimals] = useState([]);

  // Helpers to toggle multi-select options
  const toggleDeco = (item) => {
    if (decoElements.includes(item)) {
      setDecoElements(decoElements.filter(d => d !== item));
    } else {
      setDecoElements([...decoElements, item]);
    }
  };

  const toggleAddon = (item) => {
    if (addOns.includes(item)) {
      setAddOns(addOns.filter(a => a !== item));
    } else {
      setAddOns([...addOns, item]);
    }
  };

  const toggleExperience = (item) => {
    if (experiences.includes(item)) {
      setExperiences(experiences.filter(e => e !== item));
    } else {
      setExperiences([...experiences, item]);
    }
  };

  const toggleAnimal = (item) => {
    if (animals.includes(item)) {
      setAnimals(animals.filter(a => a !== item));
    } else {
      setAnimals([...animals, item]);
    }
  };

  const handleNext = () => {
    // Compile summary of custom selections
    const summary = [
      `Custom Package Selections:`,
      `- Backdrop: ${backdrop}`,
      `- Primary Color: ${color}`,
      `- Flower Type: ${flowers}`,
      `- Decoration Elements: ${decoElements.join(', ') || 'None'}`,
      `- Pathway Style: ${pathway}`,
      `- Add-ons Chosen: ${addOns.join(', ') || 'None'}`,
      `- Live Music: ${liveMusic}`,
      `- Expected Guests: ${guests}`,
      `- Venue Style: ${venue}`,
      `- Preferred Location Area: ${area}`,
      `- Unique Experiences: ${experiences.join(', ') || 'None'}`,
      `- Animal Experiences: ${animals.join(', ') || 'None'}`
    ].join('\n');

    // Encode and redirect to the book-now page
    const encodedSummary = encodeURIComponent(summary);
    navigate(`/book-now?package=custom&details=${encodedSummary}`);
  };

  return (
    <>
      <SEO
        title="Build a Custom Event Package in Jaffna | H2F Events"
        description="Design your dream celebration in Jaffna, Sri Lanka. Select themes, backdrops, flowers, custom lighting, photography add-ons, and unique proposal experiences."
        keywords="custom wedding package jaffna, bespoke event planner sri lanka, design event jaffna, custom party planning"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Event Package Builder",
          "description": "Interactive planner to build and customize bespoke weddings, proposals, birthdays, and anniversaries in Jaffna, Sri Lanka.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "H2F Events"
          }
        }}
      />
      <Navbar />
      
      <section className="py-20">
        <div className="py-4">
          <h1 className="heading-2 uppercase text-primary-blue font-semibold text-center">Build Your Ideal Event Package</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center md:px-20 px-4 text-primary-blue font-semibold">
          <div className="md:w-3/4 w-full mt-10 space-y-16">
            
            {/* 1. Main Decoration Setup */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">1. Main Decoration Setup</p>
              
              <div className="space-y-10">
                {/* Backdrop Selection */}
                <div className="space-y-4">
                  <p className="text-lg">What type of event backdrop do you prefer?</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['heart-shaped', 'round', 'oval', 'square'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setBackdrop(item)}
                        className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                          backdrop === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div className="space-y-4">
                  <p className="text-lg">Choose the primary color palette for your event</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['red', 'white', 'pink', 'mixed'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setColor(item)}
                        className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                          color === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flower Arrangement */}
                <div className="space-y-4">
                  <p className="text-lg">What type of flower arrangement would you prefer?</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['rose', 'tropical flowers', 'sakura', 'hydrangea'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFlowers(item)}
                        className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                          flowers === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Deco Elements (Multi-select) */}
                <div className="space-y-4">
                  <p className="text-lg">Choose the elements you'd like to include in your decoration (Select all that apply)</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['candles', 'candle stands', 'lanterns', 'fairy lights', 'marquee letters', 'neon letters', 'red carpet', 'beakers'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleDeco(item)}
                        className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                          decoElements.includes(item)
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pathway Design */}
                <div className="space-y-4">
                  <p className="text-lg">What kind of pathway design do you prefer?</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['rose petals', 'lantern-lit pathway', 'candle-lit pathway', 'flower bunch pathway'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPathway(item)}
                        className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                          pathway === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Add-ons (Multi-select) */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">2. Add-ons & Media Services</p>
              <div className="space-y-4">
                <p className="text-lg">Select any add-ons you'd like to include:</p>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  {['Custom Cake', 'Fireworks', 'Cold Spark Machine', 'Photography', 'Videography'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAddon(item)}
                      className={`p-3 border rounded-md font-semibold transition-all ${
                        addOns.includes(item)
                          ? 'bg-secondary-blue text-white border-secondary-blue' 
                          : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Music & Entertainment */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">3. Music & Entertainment</p>
              <div className="space-y-4">
                <p className="text-lg">Would you like live music coordination?</p>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  {['yes', 'no'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLiveMusic(item)}
                      className={`p-3 border rounded-md capitalize font-semibold transition-all ${
                        liveMusic === item 
                          ? 'bg-secondary-blue text-white border-secondary-blue' 
                          : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Event Logistics */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">4. Event Logistics</p>
              <div className="space-y-10">
                {/* Guest Count */}
                <div className="space-y-4">
                  <p className="text-lg">How many guests will be attending?</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['less than 10', '10–20', '20–50', 'more than 50'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setGuests(item)}
                        className={`p-3 border rounded-md font-semibold transition-all ${
                          guests === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Venue Preference */}
                <div className="space-y-4">
                  <p className="text-lg">Venue Preferences</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['Beach', 'Rooftop', 'Garden', 'Lake View', 'Indoor', 'Unique Destination'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setVenue(item)}
                        className={`p-3 border rounded-md font-semibold transition-all ${
                          venue === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area Preferences */}
                <div className="space-y-4">
                  <p className="text-lg">Preferred Area in Sri Lanka (H2F specializes in Jaffna & Northern Province)</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {['Jaffna', 'Colombo', 'Kandy', 'Bentota', 'Galle (Southern)', 'Other'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setArea(item)}
                        className={`p-3 border rounded-md font-semibold transition-all ${
                          area === item 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Unique Experiences */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">5. Unique Proposal Experiences</p>
              <div className="space-y-4">
                <p className="text-lg">Which of the following unique experiences would you like to include?</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {[
                    'private movie screening proposal',
                    'helicopter proposal',
                    'hot air balloon proposal',
                    'yacht proposal',
                    'hotel room transformation',
                    'flash mob marriage proposal',
                    'firework sky marriage proposal',
                    'sky lantern release',
                    'sky flower petals drop',
                    'drone coverage'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleExperience(item)}
                      className={`p-3 border rounded-md capitalize font-semibold transition-all text-left ${
                        experiences.includes(item)
                          ? 'bg-secondary-blue text-white border-secondary-blue' 
                          : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Animal Experiences */}
            <div className="space-y-8">
              <p className="md:text-3xl text-xl border-b pb-2 border-secondary-blue/10">6. Custom Elements & Animal Releases</p>
              <div className="space-y-4">
                <p className="text-lg">Select animal experiences you'd like to include:</p>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  {['Golden Retriever', 'Elephants', 'Horses', 'Pigeon Release'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAnimal(item)}
                      className={`p-3 border rounded-md font-semibold transition-all ${
                        animals.includes(item)
                          ? 'bg-secondary-blue text-white border-secondary-blue' 
                          : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <button 
                onClick={handleNext}
                className="bg-secondary-blue hover:bg-primary-blue text-primary-white rounded-md px-8 py-3 text-xl font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Proceed to Reservation
              </button>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}