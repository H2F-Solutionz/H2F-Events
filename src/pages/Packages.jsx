import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Packages() {
  const packagesList = [
    {
      id: 'pinkish-sunset-city-cruise',
      name: 'Pinkish Sunset City Cruise',
      img: '/media/imagef601.jpg',
      alt: 'Pinkish Sunset City Cruise - Romantic cruise package in Jaffna by H2F Events'
    },
    {
      id: 'golden-shore-promise',
      name: 'Golden Shore Promise',
      img: '/media/imaged68b.jpg',
      alt: 'Golden Shore Promise - Beachside proposal and wedding packages in Jaffna'
    },
    {
      id: 'scarlet-fairy-garden',
      name: 'Scarlet Fairy Garden',
      img: '/media/image835c.jpg',
      alt: 'Scarlet Fairy Garden - Luxury floral outdoor event setup in Jaffna'
    },
    {
      id: 'pinky-love-rose',
      name: 'Pinky Love Rose',
      img: '/media/image1002.jpg',
      alt: 'Pinky Love Rose - Elegant anniversary and birthday planner package Jaffna'
    }
  ];

  const addOns = [
    {
      name: 'Photography Package 1',
      img: '/media/imagef6f5.jpg',
      alt: 'Professional photographer for events in Jaffna - H2F Events',
      features: ['Unlimited Photographs', 'Drive Link', '1 Photographer']
    },
    {
      name: 'Photography Package 2',
      img: '/media/image6b50.jpg',
      alt: 'Premium multi-photographer package in Sri Lanka - H2F Events',
      features: ['2 Photographers', 'Drive Link', 'Lighting', 'Unlimited Photographs']
    },
    {
      name: 'Videography Package 1',
      img: '/media/image6c4f.jpg',
      alt: 'Event videographer and editor in Jaffna - H2F Events',
      features: ['1 Videographer', '3 min Aftermovie', 'Drive Link']
    },
    {
      name: 'Videography Package 2',
      img: '/media/image896f.jpg',
      alt: 'Premium wedding aftermovie and drone videography in Jaffna Sri Lanka',
      features: ['2 Videographers', '4 min Aftermovie', 'Drive Link', 'Drone Videographer']
    }
  ];

  const services = [
    { name: 'Full scale conceptualization - Creating theme / style / color', img: '/media/imaged2b9.jpg' },
    { name: 'Budget Tracking & Management', img: '/media/image5035.jpg' },
    { name: 'Venue Search & Selection', img: '/media/image5b05.jpg' },
    { name: 'Deco & Venue arrangement', img: '/media/imagef7a3.jpg' },
    { name: 'Design & management of invitations', img: '/media/imagee18b.jpg' },
    { name: 'Guide & assist on Caterer / Menu & Cake selection', img: '/media/imagec621.jpg' },
    { name: 'Entertainment management – innovative games/music /DJ/Band', img: '/media/image3f0f.jpg' },
    { name: 'Handling Party rentals', img: '/media/imaged8b9.jpg' },
    { name: 'Booking of party accessories to match the theme', img: '/media/image48a5.jpg' },
    { name: 'Vendor Matching & Selection', img: '/media/image7dea.jpg' },
    { name: 'Handling of Cutouts / Sign boards / Backdrops to match theme', img: '/media/imagebcb3.jpg' },
    { name: 'Comprehensive day of the event coordination', img: '/media/image5bf2.jpg' }
  ];

  return (
    <>
      <SEO
        title="Budget & Premium Event Packages in Jaffna | H2F Events"
        description="Explore H2F Events packages in Jaffna, Sri Lanka. From the budget-friendly Pinky Love Rose to the premium Golden Shore Promise. Photography and videography add-ons available."
        keywords="wedding planning packages jaffna, proposal packages sri lanka, event coordinator prices jaffna, birthday packages jaffna, photography packages jaffna"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Event Planning Packages in Jaffna - H2F Events",
          "description": "Compare budget-friendly and premium event planning packages in Jaffna, Sri Lanka.",
          "url": "https://h2f-events.pages.dev/packages",
          "itemListElement": packagesList.map((pkg, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": pkg.name,
            "url": `https://h2f-events.pages.dev/book-now?package=${pkg.id}`
          }))
        }}
      />
      <Navbar />
      
      <section className="md:py-28 py-16 md:px-10 px-4 space-y-20">
        
        {/* Packages Grid */}
        <section>
          <div className="py-4">
            <h2 className="heading-2 text-primary-blue text-center uppercase">Our Packages</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {packagesList.map((pkg) => (
              <Link 
                key={pkg.id} 
                to={`/book-now?package=${pkg.id}`}
                className="group"
              >
                <div style={{ "clipPath": "inset(0 0% 0 0 round 10px)" }} className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <div>
                    <img 
                      alt={pkg.alt} 
                      loading="lazy" 
                      width="1200" 
                      height="1200" 
                      className="object-cover rounded-md md:rounded-lg aspect-square bg-gray-200" 
                      src={pkg.img} 
                    />
                  </div>
                  <div className="pl-1 pt-2 text-primary-blue text-center md:text-base text-sm">
                    <p className="font-semibold group-hover:text-secondary-blue transition-colors">{pkg.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center justify-center my-8 gap-6">
            <button className="bg-secondary-blue hover:bg-primary-blue transition-colors text-primary-white p-2 rounded-md md:rounded-lg" aria-label="Previous page">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
              </svg>
            </button>
            <button className="bg-secondary-blue hover:bg-primary-blue transition-colors text-primary-white p-2 rounded-md md:rounded-lg" aria-label="Next page">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex gap-5 items-center justify-center">
            <div className="md:p-2 p-1 rounded-full transition-colors bg-secondary-blue"></div>
            <div className="md:p-2 p-1 rounded-full transition-colors bg-secondary-blue/30"></div>
            <div className="md:p-2 p-1 rounded-full transition-colors bg-secondary-blue/30"></div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="space-y-8">
          <div>
            <h3 className="heading-2 text-center text-secondary-blue">Add-ons & Media Packages</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} style={{ "clipPath": "inset(0 0% 0 0 round 10px)" }} className="border border-slate-100 rounded-lg pb-4 shadow-sm bg-white hover:shadow-md transition-shadow">
                <img 
                  alt={addon.alt} 
                  loading="lazy" 
                  width="1200" 
                  height="1200" 
                  className="aspect-square object-cover rounded-t-md bg-gray-200" 
                  src={addon.img} 
                />
                <div className="px-3">
                  <p className="font-semibold text-primary-blue text-xl mt-2 mb-2">{addon.name}</p>
                  <div className="flex flex-wrap gap-1 py-1">
                    {addon.features.map((feature, fIdx) => (
                      <span key={fIdx} className="bg-secondary-blue/80 md:px-2 px-1 rounded-md md:text-sm text-xs py-0.5 text-primary-white font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center my-8 gap-6">
            <button className="bg-secondary-blue hover:bg-primary-blue transition-colors text-primary-white p-2 rounded-md md:rounded-lg" aria-label="Previous add-on page">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
              </svg>
            </button>
            <button className="bg-secondary-blue hover:bg-primary-blue transition-colors text-primary-white p-2 rounded-md md:rounded-lg" aria-label="Next add-on page">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex gap-5 items-center justify-center">
            <div className="p-1 rounded-full transition-colors bg-secondary-blue"></div>
            <div className="p-1 rounded-full transition-colors bg-secondary-blue/30"></div>
            <div className="p-1 rounded-full transition-colors bg-secondary-blue/30"></div>
            <div className="p-1 rounded-full transition-colors bg-secondary-blue/30"></div>
          </div>
        </section>

        {/* Services List */}
        <section className="relative md:px-20 px-4 space-y-8">
          <div className="w-full flex flex-col justify-center space-y-4">
            <h1 className="heading-2 text-primary-blue uppercase">Our Premium Event Management Services</h1>
            <p className="text-primary-blue md:text-lg md:w-1/2">
              We offer a complete suite of professional planning and coordination services to make your Jaffna celebration absolutely seamless and beautiful.
            </p>
          </div>
          
          <div className="bg-primary-white z-20">
            {services.map((svc, idx) => (
              <div key={idx} className="text-primary-blue py-4 md:text-2xl text-lg border-b-2 border-b-primary-blue/25 flex justify-between items-center group">
                <div>
                  <p className="group-hover:translate-x-2 transition-transform duration-300">{svc.name}</p>
                </div>
                <div className="md:flex hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    alt={`H2F Events Service - ${svc.name}`}
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="h-[75px] w-[250px] object-cover object-center rounded-sm" 
                    src={svc.img} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </section>
      
      <Footer />
    </>
  );
}