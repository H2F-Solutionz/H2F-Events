import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | H2F Events"
        description="Review the terms and conditions for booking events, payments, cancellations, and liability with H2F Events in Jaffna, Sri Lanka."
        keywords="terms and conditions, h2f events terms, event booking policy jaffna"
      />
      <Navbar />
      
      <section className="py-20 md:px-10 px-4 mt-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-primary-blue space-y-6">
          <div>
            <h1 className="heading-1 text-secondary-blue">Terms &amp; Conditions</h1>
            <p className="text-sm text-slate-500">Last Updated: 21/12/2025</p>
          </div>
          
          <div className="space-y-4 text-lg font-normal">
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Payment</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>50% advance payment is required to confirm the event.</li>
                <li>Remaining payment must be settled 2 days before the event.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Transportation</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Crew and décor transportation charges will be informed on the event day (standard local rates apply).</li>
                <li>Transportation charges for photographers, videographers, and drone operators vary depending on location.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Cancellation &amp; Refunds</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>All payments made are non-refundable.</li>
                <li>Amounts paid can be used as credit for future events with the client.</li>
                <li>Full refund is only provided if the company cancels due to unforeseen circumstances.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Photography &amp; Marketing Materials</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The company may use event photos and videos for promotional purposes.</li>
                <li>Clients must notify in writing at the time of booking if they do not wish photos/videos to be used.</li>
                <li>Requests made after the event will not be accepted.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Services</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Services agreed upon are outlined in the invoice.</li>
                <li>Additional services may incur extra charges.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Liability</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The company is not liable for injuries, damages, or losses unless due to gross negligence.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Weather &amp; Damages</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Clients are responsible for weather-related decoration damages.</li>
                <li>Damages caused by client negligence or guests during the event will be charged accordingly.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Reinstallation Charges</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Additional charges apply if reinstallation is required.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Force Majeure</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The company is not liable for failure to perform due to causes beyond its control, including natural disasters, pandemics, or government actions.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Changes by Client</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Changes requested after booking are subject to availability and may incur extra charges.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Privacy</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Client information will be kept confidential and used only for event-related communication.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Payment Processing / Service Facilitation Fee</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>A nominal service facilitation fee of 3% may be applied to payments made via credit or debit cards to cover processing costs.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b pb-1 border-secondary-blue/10">Contact Us</h2>
              <p className="mt-2 text-base">
                If you have any questions about these Terms &amp; Conditions, please contact us at H2F Events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}