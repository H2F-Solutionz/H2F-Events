import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Us | Luxury Event Planners in Jaffna - H2F Events"
        description="Learn about H2F Events, Northern Sri Lanka's leading event planners. Since 2020, we have been crafting bespoke weddings, romantic proposals, and corporate events in Jaffna."
        keywords="about h2f events, event planners jaffna, Jaffna wedding organizers, northern province event planners, devent team"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us - H2F Events",
          "description": "Learn about H2F Events, Northern Sri Lanka's leading event planners who transform romantic proposals, custom weddings, and milestones into timeless memories in Jaffna.",
          "url": "https://h2f-events.pages.dev/about-us"
        }}
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-6 relative">
        <div className="sticky top-10 pb-10">
          <img 
            alt="A couple sitting together in a sandy beach - H2F Events Setup" 
            loading="lazy" 
            width="1200" 
            height="1200" 
            className="w-full md:h-[500px] h-[300px] object-cover object-top rounded-md md:rounded-lg" 
            src="/media/image0990.jpg" 
          />
        </div>
        
        <div className="sticky top-10 bg-primary-white">
          <div className="flex md:flex-row flex-col md:gap-0 gap-6 py-8 md:py-0">
            <div className="w-full md:py-20 md:px-20 px-0 flex flex-col justify-center space-y-4">
              <h1 className="heading-2 text-primary-blue uppercase">Your perfect event starts with us</h1>
              <p className="text-primary-blue text-lg">
                Founded in 2020 by a set of vibrant young individuals, H2F Events is a dedicated Event Planner in Sri Lanka, committed to turning your dream events into stunning realities. From intimate gatherings to grand-scale celebrations, we infuse every project with meticulous planning, creative flair, and unwavering attention to detail.
              </p>
            </div>
            <div className="w-full md:py-10">
              <div className="w-full h-fit overflow-hidden md:w-[50vw] rounded-lg" style={{"clipPath":"inset(35% 35% 35% 35% round 2%)"}}>
                <img 
                  alt="H2F Events management team organizing events in Jaffna" 
                  loading="lazy" 
                  width="1200" 
                  height="1200" 
                  className="w-full h-full object-contain" 
                  src="/media/image6829.jpg" 
                />
              </div>
            </div>
          </div>
          
          <div className="text-primary-blue space-y-4 md:px-20 md:w-3/4 text-lg">
            <h3 className="heading-2 uppercase">Who are we</h3>
            <p>
              At H2F Events, we transform romantic dreams into reality, specializing in creating exceptional experiences across Sri Lanka's most enchanting locations. With over four years of expertise, we focus solely on crafting unforgettable romantic events, including surprise proposals, intimate dinners, birthdays, and more.
            </p>
            <p>
              Love is a grand adventure, and your event should be as extraordinary as your story. We believe the start of your forever deserves a storybook beginning. From imaginative brainstorming to flawless execution, we handle every detail with precision and flair. Collaborating with top local and international vendors, we ensure each moment is perfect, allowing you to relax and savor the experience.
            </p>
            <p>
              We are proud to be the premier company in Sri Lanka solely dedicated to romantic events, collaborating with both local and international clients and top-tier vendors. Our goal is to deliver bespoke events that exceed your expectations and capture the magic of your special moments.
            </p>
          </div>
          
          <div className="md:px-20 text-primary-blue">
            <div style={{"opacity":"0","transform":"translateY(75px) translateZ(0)"}}>
              <h3 className="heading-3 uppercase">Why Us?</h3>
              <p className="md:w-1/2 text-lg">
                Planning an event can be stressful, but it doesn't have to be. We take the hassle out of event planning, so you can relax and enjoy your special occasion.
              </p>
            </div>
          </div>
          
          <div className="md:px-20 my-20 flex relative gap-8 h-[2000px]">
            <div className="w-full h-[500px] overflow-hidden sticky top-20">
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"0","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Experienced surprise proposal planners in Jaffna Sri Lanka"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/imageacd4.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    With years of experience planning a variety of surprise proposals and events, we have the expertise to ensure your event is a success.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"1","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Attention to details in wedding decor Jaffna - H2F Events"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/image53d9.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    We understand that even the smallest details can make a big difference. We'll work closely with you to ensure that every aspect of your event is perfect.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"2","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Professional coordinators assisting guests in Northern Sri Lanka event"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/image75d5.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    We are committed to providing our clients with the highest level of service. Our team of experienced and professional event planners will be there for you every step of the way.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"3","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Surprise birthday party planning in Jaffna - H2F Events"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/image24c9.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    We are not limited to proposals. From the best Valentine’s Day ideas to Happy Birthday surprise ideas or a special anniversary idea, we can absolutely help you plan something special no matter the occasion.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"4","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Flawless event delivery and production in Jaffna Sri Lanka"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/image054e.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    We are committed to delivering a flawless proposal that exceeds your expectations. We'll work tirelessly to ensure that everything runs smoothly.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-full absolute space-y-4" style={{"zIndex":"5","clipPath":"polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)"}}>
                <div className="w-full">
                  <img 
                    alt="Budget-friendly to luxury wedding planners in Jaffna - H2F Events"
                    loading="lazy" 
                    width="1200" 
                    height="1200" 
                    className="w-full h-[400px] object-cover rounded-md md:rounded-lg" 
                    src="/media/imagebbcf.jpg" 
                  />
                </div>
                <div className="w-full bg-primary-white h-[100px]">
                  <p className="text-primary-blue text-lg">
                    We work with your budget to create a customized proposal experience that is perfect for you and your partner.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}