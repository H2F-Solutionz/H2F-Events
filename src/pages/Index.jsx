import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useAnimate } from 'framer-motion';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Reusable Heart Effect Button Component
function HeartButton({ href, children, classIdentifier, className, spanClassName }) {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const sequence = [];

    // Reset positions
    for (let i = 0; i < 20; i++) {
      sequence.push([`.hearts-${i}-${classIdentifier}`, { x: 0, y: 0, opacity: 0, scale: 1 }, { duration: 0.00001 }]);
    }

    // Explode
    for (let i = 0; i < 20; i++) {
      sequence.push([
        `.hearts-${i}-${classIdentifier}`,
        { x: random(-100, 100), y: random(-100, 100), scale: random(1.5, 2.5), opacity: 1 },
        { duration: 0.5, at: "<" }
      ]);
    }

    // Fade out
    for (let i = 0; i < 20; i++) {
      sequence.push([
        `.hearts-${i}-${classIdentifier}`,
        { opacity: 0, scale: 0 },
        { duration: 0.5, at: "<" }
      ]);
    }

    animate(sequence);
  };

  return (
    <a
      ref={scope}
      href={href}
      onMouseEnter={handleMouseEnter}
      className={`py-1 px-4 border-2 w-fit rounded-md flex flex-col items-center justify-center relative transition-colors ${className}`}
    >
      {children}
      <span aria-hidden="true" className={`absolute inset-0 block pointer-events-none -z-10 ${spanClassName}`}>
        {Array.from({ length: 20 }).map((_, i) => (
          <svg
            key={i}
            className={`absolute opacity-0 left-1/2 top-1/2 hearts-${i}-${classIdentifier}`}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
              className="fill-current"
            />
          </svg>
        ))}
      </span>
    </a>
  );
}

// "Why Choose H2F Events" Card Component with staggered scroll clip-path reveal & hover expand
function WhyCard({ heading, description, img, index, scrollYProgress, windowWidth }) {
  const [hover, setHover] = useState(false);
  const p = index < 3 ? 0.5 : 2;
  const responsiveP = windowWidth < 768 ? index : p;
  const w = (1 / 6 * responsiveP) / 1.2;
  const clipValue = useTransform(scrollYProgress, [w, w + 1 / 6 / 1.2], ['20%', '0%']);
  const clipPath = useMotionTemplate`inset(${clipValue} ${clipValue} ${clipValue} ${clipValue} round 3%)`;

  return (
    <motion.div
      className="rounded-lg overflow-hidden md:w-[400px] will-change-auto flex flex-col"
      style={{ clipPath }}
      animate={{ height: hover && windowWidth > 768 ? "450px" : "380px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <motion.div
        className="w-full will-change-auto overflow-hidden"
        animate={{ height: hover && windowWidth > 768 ? "100%" : "300px" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <img src={img} className="w-full h-full object-cover rounded-lg" alt="Image" />
      </motion.div>
      <div className="w-full px-1 py-2 space-y-2 text-primary-blue">
        <p className="text-xl font-semibold">{heading}</p>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Index() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Hero Zoom Parallax
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const scale4 = useTransform(scrollYProgress, [0, 0.8], [4, 1]);
  const scale5 = useTransform(scrollYProgress, [0, 0.8], [5, 1]);
  const scale6 = useTransform(scrollYProgress, [0, 0.8], [6, 1]);

  // 2. Who are We
  const whoRef = useRef(null);
  const { scrollYProgress: whoScroll } = useScroll({ target: whoRef, offset: ['start end', '0.8 0'] });
  const whoScale = useTransform(whoScroll, [0, 1], [1, 2]);
  const whoClipValue = useTransform(whoScroll, windowWidth > 768 ? [0.2, 0.28] : [0.2, 0.25], ['35%', '0%']);
  const whoClipPath = useMotionTemplate`inset(${whoClipValue} ${whoClipValue} ${whoClipValue} ${whoClipValue} round 2%)`;

  // 3. Why Choose H2F Events
  const whyRef = useRef(null);
  const { scrollYProgress: whyScroll } = useScroll({ target: whyRef, offset: ['start end', '0.8 0'] });

  // 4. Our Collections Horizontal Slide
  const packagesRef = useRef(null);
  const { scrollYProgress: packagesScroll } = useScroll({ target: packagesRef, offset: ['start start', 'end start'] });
  const packagesX = useTransform(packagesScroll, [0, 0.5], ['-100%', '0%']);

  // 5. Gallery Vertical Scroll Columns
  const galleryRef = useRef(null);
  const { scrollYProgress: galleryScroll } = useScroll({ target: galleryRef, offset: ['start end', 'end start'] });
  const galleryY1 = useTransform(galleryScroll, [0, 1], ['0%', '-200%']);
  const galleryY2 = useTransform(galleryScroll, [0, 1], ['0%', '100%']);
  const galleryY3 = useTransform(galleryScroll, [0, 1], ['0%', '-30%']);

  // 6. CTO Section Reveal
  const ctoRef = useRef(null);
  const { scrollYProgress: ctoScroll } = useScroll({ target: ctoRef, offset: ['start end', 'end start'] });
  const ctoClipValue = useTransform(ctoScroll, [0, 0.5], ['35%', '0%']);
  const ctoClipPath = useMotionTemplate`inset(${ctoClipValue} ${ctoClipValue} ${ctoClipValue} ${ctoClipValue} round 2%)`;

  // Data
  const bentoStats = [
    { title: "Events Delivered", count: "500+", img: "/media/hero_bg.png" },
    { title: "Client Delight Rate", count: "100%", img: "/media/event_proposal.png" },
    { title: "Nations Served", count: "15+", img: "/media/event_wedding.png" },
    { title: "Venue Partnerships", count: "80+", img: "/media/event_birthday.png" },
    { title: "Flawless Gatherings", count: "100%", img: "/media/event_corporate.png" },
    { title: "Returning Patrons", count: "75+", img: "/media/event_outdoor.png" },
    { title: "Exclusive Locations", count: "50+", img: "/media/hero_bg.png" },
    { title: "Thematic Concepts", count: "120+", img: "/media/event_proposal.png" },
    { title: "Years of Mastery", count: "6+", img: "/media/event_wedding.png" }
  ];

  const specializations = [
    { name: "Grand Celebrations", description: "Transform your milestone moments into extraordinary spectacles with our bespoke celebration planning across Northern Sri Lanka.", img: "/media/hero_bg.png" },
    { name: "Intimate Gatherings", description: "Whether it's a private coastal dinner or an exclusive rooftop soirée, we curate spaces that breathe warmth and elegance.", img: "/media/event_proposal.png" },
    { name: "Cultural Festivities", description: "Honour rich Tamil and Sri Lankan traditions with thoughtfully designed ceremonies that blend heritage with modern sophistication.", img: "/media/event_wedding.png" },
    { name: "Milestone Marking", description: "From landmark birthdays to golden anniversaries, we craft personalized tributes that capture the essence of your journey.", img: "/media/event_birthday.png" },
    { name: "Heritage Ceremonies", description: "Celebrate cherished customs and timeless rituals with decor and production that reflect the beauty of your roots.", img: "/media/event_corporate.png" },
    { name: "Destination Experiences", description: "Curate the ultimate destination event in the stunning landscapes of Jaffna — from seaside affairs to temple garden receptions.", img: "/media/event_outdoor.png" },
    { name: "Corporate Galas", description: "Elevate your brand with impeccably produced corporate events, product launches, and networking evenings in premium venues.", img: "/media/hero_bg.png" },
    { name: "Seasonal Showcases", description: "From Pongal festivities to New Year extravaganzas, we design seasonal events that captivate and inspire every guest.", img: "/media/event_proposal.png" }
  ];

  const collections = [
    { title: "RUBY RADIANCE", img: "/media/event_wedding.png", url: "packages/ruby-radiance.html" },
    { title: "Crimson Heritage", img: "/media/event_birthday.png", url: "packages/crimson-heritage.html" },
    { title: "Velvet Twilight", img: "/media/event_corporate.png", url: "packages/velvet-twilight.html" },
    { title: "Golden Ember", img: "/media/event_outdoor.png", url: "packages/golden-ember.html" },
    { title: "Coastal Majesty", img: "/media/hero_bg.png", url: "packages/coastal-majesty.html" },
    { title: "Temple Garden", img: "/media/event_proposal.png", url: "packages/temple-garden.html" },
    { title: "Royal Burgundy", img: "/media/event_wedding.png", url: "packages/royal-burgundy.html" }
  ];

  const whyH2FEvents = [
    { heading: "Deep-Rooted Expertise", description: "With over half a decade of orchestrating unforgettable occasions across the Northern Province, our seasoned crew brings unmatched local insight and creative vision.", img: "/media/event_outdoor.png" },
    { heading: "Precision in Every Element", description: "We obsess over the finer points — from lighting angles to napkin folds — guaranteeing that each component harmonizes into a seamless, breathtaking whole.", img: "/media/event_corporate.png" },
    { heading: "Tailored Budgeting", description: "Our flexible pricing structures adapt to your financial vision, ensuring grandeur without compromise, whether intimate or extravagant.", img: "/media/event_birthday.png" },
    { heading: "Full-Spectrum Occasions", description: "Beyond weddings and galas, we handle cultural rites, product unveilings, private dinners, and every kind of gathering you can envision.", img: "/media/event_proposal.png" },
    { heading: "Seamless Delivery", description: "Our dedicated coordinators ensure zero hiccups from setup to teardown, so you can be fully present in every cherished moment.", img: "/media/hero_bg.png" },
    { heading: "Award-Winning Crew", description: "Our certified planners, designers, and technicians bring elite-level skill and infectious enthusiasm to every project we undertake.", img: "/media/event_wedding.png" }
  ];

  return (
    <>
      <SEO
        title="Event Planners in Jaffna, Sri Lanka | Budget & Premium - H2F Events"
        description="Find all budget-friendly and premium event planners in Jaffna, Sri Lanka in one place. H2F Events manages luxury weddings, corporate galas, birthdays, and traditional Tamil ceremonies."
        keywords="event planners jaffna, event management sri lanka, wedding planners jaffna, best event planners in jaffna, budget event planners jaffna, premium wedding planners jaffna"
        schema={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "EventPlanner"],
          "@id": "https://h2f-events.pages.dev/#business",
          "name": "H2F Events",
          "image": "https://h2f-events.pages.dev/media/logoevent.png",
          "description": "H2F Events is Northern Sri Lanka's premier event management platform and planner, connecting you with budget-friendly to luxury event planning services in Jaffna.",
          "url": "https://h2f-events.pages.dev/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "42 Temple Road, Nallur",
            "addressLocality": "Jaffna",
            "addressRegion": "Northern Province",
            "postalCode": "40000",
            "addressCountry": "LK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.6684,
            "longitude": 80.0244
          },
          "sameAs": [
            "https://www.facebook.com/devent.eventplanners",
            "https://www.instagram.com/devent.eventplanners/",
            "https://www.youtube.com/@Deventeventplanners",
            "https://www.pinterest.com/deventeventplanners/",
            "https://www.tiktok.com/@devent.eventplanners"
          ]
        }}
      />
      <Navbar />

      {/* 1. Hero Zoom Parallax Section */}
      <main ref={containerRef} className="h-[300vh] relative">
        <div className="h-screen sticky top-0 bg-secondary-blue overflow-hidden py-24">

          {/* Parallax Grid Images */}
          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale5 }}>
            <div className="top-[-30vh] left-[5vw] w-[35vw] h-[30vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/hero_bg.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale5 }}>
            <div className="top-[-30vh] left-[36vw] w-[25vw] h-[30vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_proposal.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale6 }}>
            <div className="top-[-16vh] left-[-25.5vw] w-[23vw] h-[58vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_wedding.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale6 }}>
            <div className="top-[-2.5vh] left-[-46vw] w-[15vw] h-[85vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_birthday.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale4 }}>
            <div className="left-[21.5vw] w-[15vw] h-[25vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_corporate.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale4 }}>
            <div className="left-[43vw] w-[25vw] h-[25vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_outdoor.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale5 }}>
            <div className="top-[27.5vh] left-[4.5vw] w-[20vw] h-[25vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_proposal.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale6 }}>
            <div className="top-[27.5vh] left-[-22vw] w-[30vw] h-[25vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full object-top rounded-md shadow-md" src="/media/event_wedding.png" />
            </div>
          </motion.div>

          <motion.div className="w-full h-full absolute top-0 flex items-center justify-center" style={{ scale: scale4 }}>
            <div className="top-[27.5vh] left-[33.5vw] w-[35vw] h-[25vh] relative">
              <img alt="Event Setup" loading="lazy" width="1200" height="1200" className="object-cover aspect-square w-full h-full rounded-md shadow-md" src="/media/event_birthday.png" />
            </div>
          </motion.div>

          {/* Zoom Overlay Text Container */}
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            <motion.div
              className="relative w-[100vw] h-[100vh] z-20 flex flex-col items-center justify-center overflow-hidden bg-primary-white"
              style={{ scale }}
            >
              <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
              <div className="absolute w-full h-full flex flex-col items-center justify-center z-30">
                <div className="md:px-8 px-2">
                  <h1 className="heading-1 leading-none text-white text-center drop-shadow-lg font-bold">H2F Events — Jaffna</h1>
                  <h2 className="md:text-[32px] text-[20px] font-light text-white text-center drop-shadow-lg mt-2">
                    Northern Sri Lanka's Premier Luxury Event & Celebration Architects
                  </h2>
                </div>
                <div className="z-30 mt-6">
                  <HeartButton
                    href="reserve.html"
                    classIdentifier="home"
                    className="border-white hover:border-white text-white hover:text-white md:text-2xl text-base"
                    spanClassName="text-white"
                  >
                    Reserve Now
                  </HeartButton>
                </div>
              </div>
              <div className="w-full h-full">
                <img
                  loading="lazy"
                  width="2000"
                  height="2000"
                  className="w-full h-full object-cover filter brightness-50"
                  src="/media/hero_bg.png"
                  alt="Background hero"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* 2. Who are We Section */}
      <section ref={whoRef} className="md:h-screen flex flex-col md:flex-row md:px-20 px-6 mt-20 mb-20 md:mb-0">
        <motion.div
          className="w-full h-fit flex flex-col justify-center sticky md:top-20 md:pt-20 pt-6 space-y-3"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <p className="text-secondary-blue uppercase heading-2">Our Heritage</p>
          <p className="text-primary-blue md:text-xl md:w-3/4">
            Rooted in the vibrant cultural tapestry of Jaffna, H2F Events was born from a passion for transforming ordinary moments into extraordinary memories. We blend Northern Sri Lanka's rich traditions with contemporary sophistication, ensuring every occasion we touch becomes a landmark in your personal story. Our dedicated artisans handle each element with care — from concept sketches to the final standing ovation.
          </p>
        </motion.div>
        <div className="w-full overflow-hidden md:rounded-2xl rounded-md relative">
          <motion.div
            className="w-full h-full overflow-hidden will-change-auto md:mt-0 mt-8"
            style={{ scale: whoScale, clipPath: whoClipPath }}
          >
            <img alt="Our Heritage" loading="lazy" width="2000" height="2000" className="w-full h-full object-cover" src="/media/event_outdoor.png" />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 md:gap-2 gap-1 md:px-20 px-3 md:py-20 py-10 md:my-20 font-bold">
        {bentoStats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center md:rounded-xl rounded-md overflow-hidden aspect-square md:aspect-auto w-full h-full relative"
            style={{ height: '250px' }}
            whileHover={{ scale: 0.97 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <div className="w-full h-full absolute inset-0 bg-black/40 z-10 transition-colors hover:bg-black/20"></div>
            <img alt={stat.title} loading="lazy" className="w-full h-full object-cover absolute inset-0" src={stat.img} />
            <div className="relative z-20 px-3 text-center text-white">
              <p className="text-base font-light md:text-4xl">
                {stat.count} <br />
                <span className="text-sm md:text-lg font-semibold">{stat.title}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 5. Gallery Vertical Scroll Columns Section */}
      <section ref={galleryRef} className="h-[80vh] md:h-[120vh] flex gap-2 overflow-hidden w-full items-center justify-center px-2 bg-secondary-blue">
        {/* Column 1 */}
        <motion.div className="flex flex-col gap-2 w-full pointer-events-none md:flex hidden" style={{ y: galleryY1 }}>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/hero_bg.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_proposal.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_wedding.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_birthday.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_corporate.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_outdoor.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/hero_bg.png" /></div>
        </motion.div>

        {/* Column 2 */}
        <motion.div className="flex flex-col gap-2 w-full pointer-events-none flex" style={{ y: galleryY2 }}>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_outdoor.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_corporate.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_birthday.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_wedding.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_proposal.png" /></div>
        </motion.div>

        {/* Column 3 */}
        <motion.div className="flex flex-col gap-2 w-full pointer-events-none flex" style={{ y: galleryY3 }}>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_wedding.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/hero_bg.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_proposal.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_outdoor.png" /></div>
          <div className="rounded-md md:rounded-lg overflow-hidden"><img alt="gallery image" className="aspect-video object-cover w-full h-full min-w-[250px]" src="/media/event_corporate.png" /></div>
        </motion.div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 md:px-10 px-4 space-y-8">
        <div>
          <h3 className="heading-2 text-secondary-blue text-center">What We Craft</h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {specializations.map((spec, i) => (
            <div key={i} className="rounded-lg overflow-hidden text-primary-blue space-y-2 hover:shadow-md transition-shadow duration-300 p-2 bg-white">
              <div className="overflow-hidden rounded-md">
                <img alt={spec.name} className="aspect-video object-cover w-full hover:scale-105 transition-transform duration-300" src={spec.img} />
              </div>
              <div>
                <p className="md:text-xl text-lg font-semibold">{spec.name}</p>
                <p className="md:text-base text-sm">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Collections Section (Horizontal Scroll) */}
      <section ref={packagesRef} className="h-[300vh]">
        <div className="h-screen sticky top-0 overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center py-16">
            <h4 className="heading-2 text-secondary-blue">Our Collections</h4>
          </div>

          <motion.div
            className="h-screen absolute top-0 origin-left flex pt-12 gap-16 items-center justify-end z-20"
            style={{ x: packagesX }}
          >
            <div className="w-[350px] h-[350px] flex items-center justify-center">
              <HeartButton
                href="collections.html"
                classIdentifier="packages"
                className="bg-secondary-blue border-primary-white text-white text-lg"
                spanClassName="text-secondary-blue"
              >
                Explore All
              </HeartButton>
            </div>

            {collections.map((pkg, i) => (
              <a key={i} href={pkg.url}>
                <div className="w-[350px] overflow-hidden hover:scale-[0.98] transition-transform duration-300">
                  <div className="md:rounded-lg rounded-md overflow-hidden shadow-md">
                    <img alt={pkg.title} className="h-[350px] w-full aspect-square object-cover bg-gray-200" src={pkg.img} />
                  </div>
                  <div className="py-2 px-2 text-primary-blue mt-2">
                    <p className="uppercase md:text-xl text-sm font-semibold text-center">{pkg.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose H2F Events Section */}
      <section className="md:px-10 px-4 py-10 flex flex-col items-center space-y-8">
        <div className="mb-20">
          <h3 className="text-center heading-2 text-secondary-blue uppercase">Why Partner With H2F Events?</h3>
        </div>
        <div ref={whyRef} className="grid md:grid-cols-2 xl:grid-cols-3 w-fit md:my-10 md:gap-20 gap-10">
          {whyH2FEvents.map((item, i) => (
            <WhyCard
              key={i}
              index={i}
              heading={item.heading}
              description={item.description}
              img={item.img}
              scrollYProgress={whyScroll}
              windowWidth={windowWidth}
            />
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="space-y-6 my-10">
        <div>
          <h3 className="heading-2 text-secondary-blue font-bold text-center">Our Process</h3>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-4 items-center md:px-20 px-10">
          {[
            { step: 1, title: "Discovery & Vision" },
            { step: 2, title: "Commitment & Deposit" },
            { step: 3, title: "Design & Coordination" },
            { step: 4, title: "Finalization & Settlement" },
            { step: 5, title: "Showtime & Celebration" }
          ].map((item, i, arr) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center">
                <div className="rounded-full p-8 md:w-24 md:h-24 w-12 h-12 md:text-3xl text-lg flex items-center justify-center bg-secondary-blue shadow-md">
                  <span className="text-primary-white font-bold">{item.step}</span>
                </div>
                <div className="mt-2">
                  <p className="text-primary-blue text-center font-bold md:text-base text-sm">{item.title}</p>
                </div>
              </div>
              {i !== arr.length - 1 && (
                <>
                  <div className="md:flex hidden w-full h-1 bg-secondary-blue relative rounded-full -translate-y-4"></div>
                  <div className="md:hidden w-1 h-10 bg-secondary-blue relative rounded-full mt-2"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Featured On Section */}
      <section className="py-10 md:px-10 px-6">
        <h4 className="heading-2 text-secondary-blue text-center">Recognized By</h4>
        {/* Simple responsive slider layout for local */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-8">
          <img src="/media/event_corporate.png" alt="Featured 1" className="w-[120px] h-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/media/event_outdoor.png" alt="Featured 2" className="w-[120px] h-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/media/event_wedding.png" alt="Featured 3" className="w-[120px] h-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="md:px-10 px-4 space-y-8 py-10 bg-secondary-blue/10 rounded-xl">
        <h5 className="text-center uppercase heading-2 text-secondary-blue">
          Voices of Our Valued Patrons
        </h5>
        <div className="flex flex-col md:flex-row w-full gap-8 max-w-5xl mx-auto items-center">
          <div className="w-full bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-blue flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <p className="font-semibold text-gray-900">Kavi Rajaratnam</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.174 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-xs text-gray-500">5.0</span>
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed mt-2">
              &quot;H2F Events turned our daughter's coming-of-age ceremony into something truly magnificent. Every detail reflected our Tamil heritage while feeling utterly modern and fresh. The team's dedication to perfection was evident from the first consultation to the last guest departure. We couldn't have asked for a more memorable celebration in Jaffna.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTO Section */}
      <section ref={ctoRef} className="flex flex-col md:flex-row gap-12 items-center justify-center md:my-20 my-10 relative md:px-20 px-6" id="cto">
        <motion.div className="w-full h-fit overflow-hidden md:w-[50vw] rounded-lg" style={{ clipPath: ctoClipPath }}>
          <img alt="Celebration" className="w-full h-full object-contain" src="/media/event_proposal.png" />
        </motion.div>

        <div className="flex flex-col space-y-8 z-10 w-full md:w-fit">
          <div className="md:text-left text-center">
            <h5 className="heading-2 leading-none text-secondary-blue">
              Envision Your Perfect Occasion <br />Let Us Bring It to Life!
            </h5>
            <p className="text-xl text-primary-blue mt-2">Arrange a consultation with our Jaffna team today</p>
          </div>
          <div className="z-20 flex md:justify-start justify-center w-full">
            <HeartButton
              href="reserve.html"
              classIdentifier="cto"
              className="border-secondary-blue hover:border-primary-blue text-secondary-blue hover:text-primary-blue"
              spanClassName="text-secondary-blue"
            >
              Reserve Now
            </HeartButton>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
