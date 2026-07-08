import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | H2F Events"
        description="Review the terms of service for utilizing the website, services, and event planning assets of H2F Events in Jaffna, Sri Lanka."
        keywords="terms of service, h2f events policies, legal policy event planner"
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-4 mt-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-primary-blue space-y-6">
          <div>
            <h1 className="heading-1 text-secondary-blue">Terms of Service</h1>
            <p className="text-sm text-slate-500">Last Updated: 03/10/2024</p>
            <p className="mt-2 text-lg">
              Please read these Terms of Service carefully before using our website (the "Service") operated by H2F Events ("us", "we", or "our").
            </p>
          </div>
          
          <div className="space-y-4 text-lg font-normal">
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Agreement to Terms</h2>
              <p className="mt-2">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Intellectual Property</h2>
              <p className="mt-2">
                The Service and its original content, features, and functionality are owned by H2F Events and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">User Contributions</h2>
              <p className="mt-2">
                Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Links to Other Websites</h2>
              <p className="mt-2">
                Our Service may contain links to third-party websites or services that are not owned or controlled by H2F Events. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that H2F Events shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Termination</h2>
              <p className="mt-2">
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Disclaimer</h2>
              <p className="mt-2 text-slate-700 italic">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Contact Us</h2>
              <p className="mt-2">
                If you have any questions about these Terms, please contact us at H2F Events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}