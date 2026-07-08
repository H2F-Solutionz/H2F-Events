import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookNow() {
  const location = useLocation();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whereFrom, setWhereFrom] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Jaffna');
  const [selectedType, setSelectedType] = useState('Surprise Proposal');
  const [budget, setBudget] = useState('Simple | USD 350-700');
  const [referral, setReferral] = useState('Instagram');
  const [description, setDescription] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill package selection from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pkgId = params.get('package');
    const details = params.get('details');
    
    if (pkgId === 'custom' && details) {
      setDescription(decodeURIComponent(details));
      setSelectedType('Other');
    } else if (pkgId) {
      const packageNames = {
        'pinkish-sunset-city-cruise': 'Pinkish Sunset City Cruise',
        'golden-shore-promise': 'Golden Shore Promise',
        'scarlet-fairy-garden': 'Scarlet Fairy Garden',
        'pinky-love-rose': 'Pinky Love Rose'
      };
      
      const pkgName = packageNames[pkgId] || pkgId;
      setDescription(`Hi H2F Events! I would love to inquire about the "${pkgName}" package for my upcoming event. Please share more details.`);
      
      // If it's a proposal package, pre-select type
      if (pkgId.includes('promise') || pkgId.includes('cruise')) {
        setSelectedType('Surprise Proposal');
      } else if (pkgId.includes('garden')) {
        setSelectedType('Anniversary Celebration');
      }
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !agreed) return;
    
    // In a real app, this would send data to an API or database.
    console.log({
      name,
      email,
      phone,
      whereFrom,
      eventLocation: selectedLocation,
      eventType: selectedType,
      budget,
      referral,
      description,
      agreed
    });
    
    setSubmitted(true);
  };

  const locationsList = [
    'Jaffna',
    'Colombo',
    'Negombo',
    'Galle',
    'Bentota',
    'Kandy',
    'Ella',
    'Other (upon request)'
  ];

  const typesList = [
    'Surprise Proposal',
    'Luxury Wedding',
    'Anniversary Celebration',
    'Romantic Birthday',
    'Corporate Gala',
    'Room Transformation',
    'Other'
  ];

  const budgetsList = [
    'Simple | USD 350-700',
    'Standard | USD 700-1,500',
    'Gold | USD 1,500-2,500',
    'Diamond | USD 2,500-5,000'
  ];

  const referralsList = [
    'Instagram',
    'Facebook',
    'TikTok',
    'Google Search',
    'Website',
    'Family/Friend'
  ];

  return (
    <>
      <SEO
        title="Book an Event Planner in Jaffna, Sri Lanka | H2F Events"
        description="Ready to plan your next event? Contact H2F Events in Jaffna to book a consultation. Compare budget-friendly and premium packages for weddings, proposals, birthdays, and corporate events."
        keywords="book event planner jaffna, hire wedding planner jaffna, event organizers sri lanka, contact h2f events, reserve event coordinator"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Book a Consultation - H2F Events",
          "description": "Contact form to request event planning services and book consultations for weddings, birthdays, corporate functions, and romantic proposals in Jaffna, Sri Lanka.",
          "url": "https://h2f-events.pages.dev/book-now"
        }}
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-4">
        <main className="flex flex-col w-full py-10 md:px-20 px-0 space-y-8">
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-primary-blue p-8 rounded-lg text-center max-w-2xl mx-auto space-y-4">
              <h3 className="heading-2 text-green-700">Thank you, {name}!</h3>
              <p className="text-lg">
                Your event inquiry has been sent successfully. One of our senior Jaffna coordinators will contact you via email ({email}) or phone ({phone}) within 24 hours to begin planning.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setName(''); setEmail(''); setPhone(''); setDescription(''); }}
                className="bg-secondary-blue text-white px-6 py-2 rounded-md hover:bg-primary-blue transition-colors font-bold mt-4"
              >
                Inquire for Another Event
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 py-5">
              
              {/* Left Side Content */}
              <div className="w-full md:w-1/3 flex flex-col space-y-6">
                <div className="w-full text flex flex-col space-y-3">
                  <h1 className="heading-2 text-secondary-blue leading-none">Let's find the right option for you!</h1>
                  <h2 className="text-primary-blue text-lg">
                    At H2F Events, we take a personalized approach to every Jaffna celebration. Submit your inquiry below, and a member of our planning team will contact you shortly.
                  </h2>
                </div>
                <div>
                  <img 
                    alt="Luxury outdoor dining layout in Jaffna Sri Lanka by H2F Events" 
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="rounded-md h-[300px] w-full object-cover" 
                    src="/media/imageac34.jpg" 
                  />
                </div>
              </div>
              
              {/* Right Side Form Inputs */}
              <div className="w-full md:w-2/3 space-y-6 font-medium">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <input 
                    className="w-full bg-secondary-blue/10 text-primary-blue border border-secondary-blue/20 focus:border-secondary-blue focus:outline-none placeholder:text-primary-blue/60 rounded-md py-3 px-3 md:text-lg" 
                    type="text" 
                    placeholder="Name *" 
                    required 
                    autoComplete="name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input 
                    className="w-full bg-secondary-blue/10 text-primary-blue border border-secondary-blue/20 focus:border-secondary-blue focus:outline-none placeholder:text-primary-blue/60 rounded-md py-3 px-3 md:text-lg" 
                    type="email" 
                    placeholder="Email *" 
                    required 
                    autoComplete="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <input 
                    className="w-full bg-secondary-blue/10 text-primary-blue border border-secondary-blue/20 focus:border-secondary-blue focus:outline-none placeholder:text-primary-blue/60 rounded-md py-3 px-3 md:text-lg" 
                    type="tel" 
                    required 
                    placeholder="Phone Number *" 
                    autoComplete="tel" 
                    name="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input 
                    className="w-full bg-secondary-blue/10 text-primary-blue border border-secondary-blue/20 focus:border-secondary-blue focus:outline-none placeholder:text-primary-blue/60 rounded-md py-3 px-3 md:text-lg" 
                    type="text" 
                    placeholder="Which Country/City are you from? *" 
                    required 
                    autoComplete="off" 
                    name="whereFrom" 
                    value={whereFrom} 
                    onChange={(e) => setWhereFrom(e.target.value)}
                  />
                </div>
                
                {/* Location Selection */}
                <div>
                  <label className="block mb-2 text-primary-blue font-semibold">Event Location *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {locationsList.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setSelectedLocation(loc)}
                        className={`p-2 border rounded-md font-semibold text-center transition-all ${
                          selectedLocation === loc 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Event Type Selection */}
                <div>
                  <label className="block mb-2 text-primary-blue font-semibold">Event Type *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {typesList.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`p-2 border rounded-md font-semibold text-center transition-all text-sm ${
                          selectedType === type 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Budget Selection */}
                <div>
                  <label className="block mb-2 text-primary-blue font-semibold">Estimated Budget *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {budgetsList.map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setBudget(bg)}
                        className={`p-2 border rounded-md font-semibold text-center transition-all ${
                          budget === bg 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Referral Selection */}
                <div>
                  <label className="block mb-2 text-primary-blue font-semibold">How did you hear about us? *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {referralsList.map((ref) => (
                      <button
                        key={ref}
                        type="button"
                        onClick={() => setReferral(ref)}
                        className={`p-2 border rounded-md font-semibold text-center transition-all text-sm ${
                          referral === ref 
                            ? 'bg-secondary-blue text-white border-secondary-blue' 
                            : 'bg-white text-primary-blue border-secondary-blue/20 hover:bg-slate-50'
                        }`}
                      >
                        {ref}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <label className="block mb-2 text-primary-blue font-semibold">Tell us about your event</label>
                  <textarea 
                    className="w-full bg-secondary-blue/10 text-primary-blue border border-secondary-blue/20 focus:border-secondary-blue focus:outline-none placeholder:text-primary-blue/60 rounded-md py-3 px-3 md:text-lg" 
                    rows="4" 
                    name="description" 
                    placeholder="Provide details about guest count, layout dreams, specific requests..." 
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                
                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="agreed" 
                    className="w-5 h-5 accent-primary-blue mt-1" 
                    required 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <label htmlFor="agreed" className="text-primary-blue text-sm">
                    I have read, understood, and agree to the{' '}
                    <a target="_blank" rel="noopener noreferrer" className="underline text-secondary-blue" href="/terms-and-conditions">
                      Terms and Conditions of H2F Events
                    </a>
                    .
                  </label>
                </div>
                
                {/* Submit Button */}
                <div className="w-full flex md:justify-start justify-center">
                  <button 
                    type="submit"
                    className={`md:text-lg font-bold text-primary-white px-8 py-3 text-center rounded-lg transition-colors ${
                      agreed 
                        ? 'bg-secondary-blue hover:bg-primary-blue cursor-pointer' 
                        : 'bg-secondary-blue/50 cursor-not-allowed'
                    }`}
                    disabled={!agreed}
                  >
                    Send Inquiry
                  </button>
                </div>
                
              </div>
            </form>
          )}
        </main>
      </section>
      
      <Footer />
    </>
  );
}