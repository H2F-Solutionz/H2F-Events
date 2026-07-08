import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Luxury Wedding Reception Decor', img: '/media/imagec1a1.jpg', alt: 'Luxury wedding reception stage decor in Jaffna Sri Lanka' },
    { id: 2, title: 'Outdoor Engagement Ceremony', img: '/media/imagea0c6.jpg', alt: 'Outdoor Tamil wedding engagement setup in Jaffna' },
    { id: 3, title: 'Bespoke Table Setting & Floral Design', img: '/media/image9d2c.jpg', alt: 'Bespoke table runner and rose floral arrangement Jaffna' },
    { id: 4, title: 'Beachside Surprise Proposal Setup', img: '/media/imaged31c.jpg', alt: 'Romantic beach walk proposal setup in Jaffna Sri Lanka' },
    { id: 5, title: 'Corporate Gala Dinner Lighting', img: '/media/image4e05.jpg', alt: 'Corporate awards gala banquet lighting and setup in Jaffna' },
    { id: 6, title: 'Traditional Hindu Wedding Canopy', img: '/media/imagecc85.jpg', alt: 'Traditional Tamil wedding Manavarai setup Nallur Jaffna' },
    { id: 7, title: 'Premium Milestone Birthday Celebration', img: '/media/imagecac4.jpg', alt: 'Premium themed birthday party stage backdrop decoration' },
    { id: 8, title: 'Coastal Proposal Under the Stars', img: '/media/imagebf47.jpg', alt: 'Romantic fairy light canopy proposal setup Sri Lanka' },
    { id: 9, title: 'Elegant Floral Archway Entryway', img: '/media/image6c7a.jpg', alt: 'Lush floral archway event entryway Jaffna' },
    { id: 10, title: 'Vibrant Pub / Club Birthday Decor', img: '/media/image3365.jpg', alt: 'Vibrant birthday balloon archway and sign decoration' },
    { id: 11, title: 'Intimate Coastal Proposal Canopy', img: '/media/image52f1.jpg', alt: 'Intimate beach proposal teepee tent and light pathway' },
    { id: 12, title: 'Classic Ballroom Wedding Reception', img: '/media/image336d.jpg', alt: 'Grand ballroom wedding reception layout in Jaffna' },
    { id: 13, title: 'Fairy Light Garden Dining Pathway', img: '/media/imagead86.jpg', alt: 'Outdoor garden pathway dining table setup and lights' },
    { id: 14, title: 'Traditional Tamil Puberty Ceremony Mandap', img: '/media/imageeb8c.jpg', alt: 'Traditional Tamil puberty ceremony mandap setup Jaffna' },
    { id: 15, title: 'Stunning Floral Mandap Setup', img: '/media/image7117.jpg', alt: 'Stunning outdoor floral mandap wedding setup Sri Lanka' },
    { id: 16, title: 'Milestone Anniversary Garden Dinner', img: '/media/image3c2c.jpg', alt: 'Garden milestone anniversary banquet table setup Jaffna' }
  ];

  return (
    <>
      <SEO
        title="Our Portfolio & Event Gallery | Jaffna Celebrations - H2F Events"
        description="Browse H2F Events' gallery of luxury weddings, romantic beach proposals, milestone birthdays, and corporate celebrations curated across Jaffna and the Northern Province."
        keywords="jaffna event photos, wedding decoration jaffna, proposal photos sri lanka, h2f events portfolio, event setups jaffna"
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "H2F Events Gallery",
          "description": "Photo portfolio of luxury weddings, traditionalTamil ceremonies, and romantic proposals in Jaffna, Sri Lanka.",
          "url": "https://h2f-events.pages.dev/gallery",
          "image": galleryItems.map(item => `https://h2f-events.pages.dev${item.img}`)
        }}
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-4 space-y-6">
        <div>
          <h1 className="heading-1 text-secondary-blue">Event Gallery</h1>
          <p className="text-primary-blue text-lg">
            Browse our stunning gallery and see H2F Events' event planning magic in action. Discover inspiration for your next budget-friendly or premium event in Jaffna, Sri Lanka.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:py-20 py-10">
          {galleryItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveImage(item)}
              className="w-full text-left group overflow-hidden relative rounded-md md:rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-blue"
            >
              <div className="relative overflow-hidden rounded-md md:rounded-lg aspect-[4/3] bg-slate-100">
                <img 
                  alt={item.alt} 
                  loading="lazy" 
                  width="1200" 
                  height="1200" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={item.img} 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-primary-white font-semibold text-lg">{item.title}</span>
                  <span className="bg-primary-white text-secondary-blue p-1 rounded-full text-xs uppercase font-bold">View</span>
                </div>
                <div className="px-2 py-2 absolute bottom-0 text-primary-white font-semibold bg-secondary-blue/90 w-full md:hidden flex justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs uppercase font-bold border-l pl-2">Tap</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            onClick={() => setActiveImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.img} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
            <p className="text-white text-xl font-semibold text-center">{activeImage.title}</p>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}