'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Incorporation of Companies",
    imageUrl: "https://img.freepik.com/free-photo/corporate-business-handshake-business-partners_53876-104764.jpg",
    description: "At Chanakyatse, we specialize in company incorporation services. From UAE's ADGM, DIFC, Mainland, and Freezone to offshore setups in Singapore and India, our legal experts ensure compliance and strategic advantage. Experience a hassle-free, legally sound incorporation process tailored to your needs."
  },
  {
    id: 2,
    title: "Mergers and Acquisitions",
    imageUrl: "https://img.freepik.com/free-photo/business-people-blue-background_53876-101889.jpg",
    description: "Cementing our expertise in mergers and acquisitions, we stand as a trusted advisor for businesses negotiating complex deals. With a track record of representing major players and negotiating with industry leaders, our seasoned team employs strategic insight and meticulous attention to detail to ensure the most ideal outcomes."
  },
  {
    id: 3,
    title: "Strategic Restructuring",
    imageUrl: "https://img.freepik.com/free-photo/chess-game-business-strategy-concept_53876-13393.jpg",
    description: "Change is the only constant in business, and sometimes, strategic restructuring becomes imperative for sustained growth. Chanakyatse Consultancy excels in crafting and implementing tailored restructuring plans that optimize resources, enhance operational efficiency, and position businesses for long-term success."
  },
  {
    id: 4,
    title: "Comprehensive Legal Support",
    imageUrl: "https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg",
    description: "Our adept legal team assists businesses in maneuvering through corporate law, compliance, and regulatory hurdles. From contract negotiations to dispute resolution, we offer expert counsel to safeguard client interests, focusing on India and the UAE."
  },
  {
    id: 5,
    title: "Intellectual Property Rights",
    imageUrl: "https://img.freepik.com/free-photo/large-group-people-black-lives-matter-protest-focus-is-black-man-holding-placard-with-please-i-can-t-breathe-inscription_637285-7104.jpg",
    description: "Our firm specializes in Intellectual Property Rights (IPR) registration, safeguarding your innovations and creations through comprehensive legal protection. Additionally, we excel in handling IPR violation, ensuring your rights are upheld and infringements are swiftly addressed."
  },
  {
    id: 6,
    title: "DIFC and ADGM Courts",
    imageUrl: "https://img.freepik.com/free-photo/grey-marble-column-details-building_1359-886.jpg",
    description: "With unparalleled expertise, we offer comprehensive legal representation services in the Dubai International Financial Centre (DIFC) and Abu Dhabi Global Market (ADGM) Courts, committed to providing the best representation and achieving optimal results for our clients."
  },
  {
    id: 7,
    title: "Succession Planning",
    imageUrl: "https://img.freepik.com/free-photo/group-casually-dressed-business-people-discussing-ideas-office_7861-1634.jpg",
    description: "We specialize in comprehensive succession planning services tailored to meet the unique needs of each client. With a proven track record of guiding businesses through smooth transitions, we offer strategic advice and meticulous planning to ensure a seamless transition of leadership and assets."
  },
  {
    id: 8,
    title: "DIFC Wills",
    imageUrl: "https://img.freepik.com/free-photo/business-work-concept_1388-71.jpg",
    description: "We specialize in providing expert assistance with DIFC wills and probate matters, ensuring your assets are protected and your estate is handled with care. Whether you're a resident or a non-Muslim investor, trust us for tailored solutions to safeguard your assets."
  },
  {
    id: 9,
    title: "Family Wealth Planning",
    imageUrl: "https://img.freepik.com/free-photo/portrait-cute-little-girl-putting-money-pink-piggy-bank-save-new-toy-her-her-small-brother_662251-568.jpg",
    description: "We offer comprehensive family wealth planning services designed to secure your financial legacy for generations to come. From estate planning to asset protection and intergenerational wealth transfer, we provide holistic solutions that prioritize your family's prosperity."
  },
  {
    id: 10,
    title: "License Advisory and Procurement",
    imageUrl: "https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg",
    description: "We provide comprehensive advisory services for businesses in the UAE, offering expert guidance on the necessary licenses tailored to your desired activities. From initial assessment to application and procurement, we streamline the licensing process, ensuring compliance with UAE regulations."
  },
  {
    id: 11,
    title: "Cross Jurisdictional Cases",
    imageUrl: "https://img.freepik.com/free-photo/close-up-judge-with-golden-rings-gavel_23-2148230762.jpg",
    description: "We stand at the forefront of addressing cases involving both Indian and UAE jurisdictions, offering invaluable assistance to individuals navigating legal challenges spanning across borders, ensuring your rights and interests are protected every step of the way."
  },
  {
    id: 12,
    title: "Applying Indian Laws in UAE",
    imageUrl: "https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30452.jpg",
    description: "We are among the first and few firms adept at invoking Indian laws, including those governing personal matters like divorce and succession, in the UAE. We specialize in enabling Indian citizens to assert their rights under Indian law while in the UAE."
  },
  {
    id: 13,
    title: "Trust and Foundation",
    imageUrl: "https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg",
    description: "We offer expert assistance in the creation of trusts and foundations, providing comprehensive solutions tailored to your specific needs and objectives. Whether you seek to establish a trust for asset protection or a foundation for philanthropic endeavors, our experienced team guides you through every step."
  }
];

const ServicesPage = () => {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#24388F]/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Hero Section with enhanced design */}
      <div className="relative bg-[#24388F] text-white">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Hero Content */}
        <div className="relative py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-4">SERVICES</h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="hover:text-white/80 cursor-pointer transition-colors">CHANAKYATSE</span>
              <ChevronRight size={16} />
              <span>SERVICES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative">
        <div className="container mx-auto px-6 py-20">
          {/* Section Title with decorative elements */}
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl font-bold text-[#24388F] mb-4 relative z-10">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
              Comprehensive legal and business solutions tailored to meet your specific needs
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#24388F]/20 rounded-full" />
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service) => (
              <div key={service.id} className="group h-[400px] [perspective:1000px] p-2">
                <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0">
                    <div className="h-full w-full rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <Image
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl"
                        height={1000}
                        width={1000}
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center">
                          <h3 className="text-white text-2xl font-bold">
                            {service.title}
                          </h3>
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white/80 text-sm">Hover to learn more</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-[#24388F] to-[#24388F]/90 px-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                    <div className="flex min-h-full flex-col items-center justify-center py-8">
                      <h3 className="text-2xl font-bold text-center mb-6">{service.title}</h3>
                      <p className="text-center text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-[#24388F]/5 py-16 mt-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#24388F] mb-4">
              Need Professional Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of expert lawyers and consultants are ready to help you navigate through your legal and business challenges.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-[#24388F] text-white px-8 py-3 rounded-lg hover:bg-[#24388F]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;