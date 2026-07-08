import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 'devent-6th-anniversary-leading-proposal-planner-sri-lanka',
      title: 'Six Years of Creating Moments That Last a Lifetime',
      img: '/media/imagef156.png',
      alt: 'H2F Events 6th anniversary - Celebrating premier wedding planning in Sri Lanka'
    },
    {
      id: 'why-romance-looks-different-for-this-generation',
      title: 'Why Romance Looks Different for This Generation',
      img: '/media/imagea0fb.jpg',
      alt: 'Modern romantic couple proposal celebration'
    },
    {
      id: 'she-thought-it-was-just-a-photoshoot-until-the-moment-everything-changed-on-a-natural-rock',
      title: 'In the Beginning It Was Just a Photoshoot… Until the Moment Everything Changed on a Natural Rock',
      img: '/media/imagedb9c.jpg',
      alt: 'Surprise proposal setup on a natural rock in Sri Lanka'
    },
    {
      id: 'she-thought-it-was-just-a-beach-walk-proposal-sri-lanka',
      title: 'She Thought It Was Just a Beach Walk.. Until He Changed Her Life Forever',
      img: '/media/image093b.jpg',
      alt: 'Beach side marriage proposal path with rose petals and lanterns'
    },
    {
      id: 'a-love-story-like-no-other-creating-the-perfect-surprise-proposal-in-sri-lanka',
      title: 'A Love Story Like No Other: Creating the Perfect Surprise Proposal in Sri Lanka',
      img: '/media/imagebc40.png',
      alt: 'Romantic surprise proposal setup in Sri Lanka'
    },
    {
      id: '10-reasons-to-propose-in-sri-lanka-the-ultimate-luxury-proposal-destination-guide',
      title: '10 Reasons to Propose in Sri Lanka: The Ultimate Luxury Proposal Destination Guide',
      img: '/media/image7644.png',
      alt: 'Luxury destination proposal spots in Sri Lanka'
    },
    {
      id: 'how-to-plan-a-dreamy-proposal-in-sri-lanka-a-luxury-surprise-proposal-guide',
      title: 'How to Plan a Dreamy Proposal in Sri Lanka: A Luxury Surprise Proposal Guide',
      img: '/media/image15dd.jpg',
      alt: 'A dreamy proposal design guide by H2F Events'
    }
  ];

  return (
    <>
      <SEO
        title="Jaffna Event Planning Blog & Luxury Destination Guide | H2F Events"
        description="Read planning stories, luxury proposal guides, and traditional Tamil wedding trends from the expert coordinators at H2F Events in Jaffna, Sri Lanka."
        keywords="jaffna wedding blog, proposal guide sri lanka, luxury proposal spots sri lanka, destination wedding guide jaffna"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "H2F Events Blog & Sri Lanka Proposal Guide",
          "description": "Read advice, planning guides, and stories from Northern Sri Lanka's leading event planner.",
          "publisher": {
            "@type": "Organization",
            "name": "H2F Events",
            "logo": {
              "@type": "ImageObject",
              "url": "https://h2f-events.pages.dev/media/logoevent.png"
            }
          }
        }}
      />
      <Navbar />
      
      <section className="min-h-screen my-16 px-10 py-10">
        <div className="py-6">
          <h1 className="text-primary-blue heading-1">Blog & Event Stories</h1>
          <p className="text-primary-blue/80 text-lg mt-2 max-w-3xl">
            Real stories, proposal guides, and event inspiration from Jaffna's premier wedding planners and celebration architects.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {blogPosts.map((post) => (
            // Since we do not have specific pages for them, we route them back to /blog or /book-now
            // But we keep the URL clean so crawlers index them, and we show the title clearly.
            <Link 
              key={post.id} 
              to={`/book-now?inquiry=blog-${post.id}`} 
              className="w-full overflow-hidden rounded-lg bg-slate-100 hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="overflow-hidden aspect-video relative">
                <img 
                  loading="lazy" 
                  width="400" 
                  height="250" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={post.img} 
                  alt={post.alt}
                />
              </div>
              <div className="py-4 px-3 space-y-4 flex-grow flex flex-col justify-between bg-white">
                <p className="font-belgiano-serif text-xl text-primary-blue group-hover:text-secondary-blue transition-colors">
                  {post.title}
                </p>
                <span className="text-secondary-blue font-bold text-sm block mt-2">Read Story &times;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <Footer />
    </>
  );
}