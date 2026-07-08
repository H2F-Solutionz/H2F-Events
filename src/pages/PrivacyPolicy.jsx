import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | H2F Events"
        description="Understand how H2F Events collects, uses, and protects your personal information when utilizing event planning services."
        keywords="privacy policy, data collection h2f, jaffna event planner privacy policy"
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-4 mt-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-primary-blue space-y-6">
          <div>
            <h1 className="heading-1 text-secondary-blue">Privacy Policy</h1>
            <p className="text-sm text-slate-500">Last Updated: 03/10/2024</p>
            <p className="mt-2 text-lg">
              This Privacy Policy explains how H2F Events ("we", "us", or "our") collects, uses, and discloses personal information when you visit our website.
            </p>
          </div>
          
          <div className="space-y-4 text-lg font-normal">
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Introduction</h2>
              <p className="mt-2">
                We are committed to protecting the privacy of our clients and site visitors. This policy outlines how we handle user data and details collected during inquiries and bookings.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Information We Collect</h2>
              <p className="mt-2">
                When you visit our website, we may collect certain information automatically, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Log data: Information that your browser sends whenever you visit our website. This may include your IP address, browser type and version, pages visited, time and date of visit, and other statistics.</li>
                <li>Cookies: We may use cookies and similar tracking technologies to track activity on our website. You can control cookies through your browser settings.</li>
                <li>Third-party services: We may use third-party analytics tools (like Google Analytics) to monitor website traffic and user behavior.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Use of Information</h2>
              <p className="mt-2">
                We use collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To analyze and improve the performance and usability of our website.</li>
                <li>To personalize your experience and deliver tailored event details.</li>
                <li>To respond to your booking inquiries, consultations, and support needs.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Disclosure of Information</h2>
              <p className="mt-2">
                We may disclose personal information only:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>With your explicit consent.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect and defend our rights, property, and services.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Third-Party Links</h2>
              <p className="mt-2">
                Our website may contain links to third-party sites. H2F Events has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Security</h2>
              <p className="mt-2">
                We implement industry-standard security measures to safeguard your data. However, please remember that no method of electronic storage or transmission is 100% secure.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Changes to This Policy</h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Contact Us</h2>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us at H2F Events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}