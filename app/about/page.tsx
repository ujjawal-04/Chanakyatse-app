'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, BarChart3, Award, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  description: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Adv. Bindu S. Chettur',
    position: 'Founder and Managing Director',
    imageUrl: '/Adv-Binschet.webp',
    description: [
      'As a successful lawyer, Adv. Bindu S Chettur has witnessed firsthand the intersection of legal intricacies and business challenges.',
      'Her profound legal expertise combined with keen business acumen led to the creation of Chanakyatse Consultancy.'
    ]
  },
  {
    id: 2,
    name: 'Adv. Shaffi Mather',
    position: 'Public Policy Analyst',
    imageUrl: '/ShaffiMather.webp',
    description: [
      'Expert in public policy and regulatory affairs.',
      'Extensive experience in policy analysis and implementation.'
    ]
  },
  {
    id: 3,
    name: 'Adv. Amjith M Anandhan',
    position: 'Senior Legal Associate',
    imageUrl: '/Amjith.webp',
    description: [
      'Specializes in corporate law and commercial litigation.',
      'Experienced in handling complex legal matters and disputes.'
    ]
  },
  {
    id: 4,
    name: 'Adv. Ashok GV',
    position: 'Senior Legal Associate',
    imageUrl: '/tst-ask.webp',
    description: [
      'A dispute resolution counsel, Ashok represents clients in the food and beverages, healthcare, pharmaceuticals, technology, banking and financial services, real estate and construction, ecommerce and hospitality areas, in domestic and international dispute resolution.',
      'His service areas cover contract violations, company law proceedings, prosecution under India\'s Food Standards and Safety Act, 2006 and Prevention of Food Adulteration Act, and IP rights enforcement.',
      'Ashok also advises clients in the U.K., Singapore, India and Switzerland on their global contractual requirements. He also assists clients in these jurisdictions for Investment funding, Intellectual Property protection and Enforcement, Telecommunication regulations, space law, taxation, gender sensitivity and data privacy.',
      'Ashok is an invited speaker at the New Delhi-based independent think tank, the Observer Research Foundation, the National Law School of India University, Bengaluru, Indian Institute of Technology-Kharagpur, Indian Institute of Management- Bengaluru and at sexual violence awareness-building and sensitisation programmes for the police and judges.'
    ]
  },
  {
    id: 5,
    name: 'Adv. Jinesh',
    position: 'Senior Finance Expert',
    imageUrl: '/tst-man.webp',
    description: [
      'Expert in financial planning and analysis.',
      'Specializes in corporate finance and investment strategies.'
    ]
  },
  {
    id: 6,
    name: 'Adv. Sindhya S Nair',
    position: 'Legal Associate',
    imageUrl: '/Sindhya.webp',
    description: [
      'Focuses on corporate legal compliance and documentation.',
      'Experienced in handling regulatory matters.'
    ]
  },
  {
    id: 7,
    name: 'Ashwin Chaturvedi',
    position: 'Legal Associate',
    imageUrl: '/Ashwin.webp',
    description: [
      'Specializes in contract law and negotiations.',
      'Handles corporate legal affairs and compliance matters.'
    ]
  },
  {
    id: 8,
    name: 'Raj Naveen',
    position: 'Senior Finance Expert',
    imageUrl: '/tst-raj.webp',
    description: [
      'Expert in financial planning and risk management.',
      'Provides strategic financial guidance to clients.'
    ]
  },
  {
    id: 9,
    name: 'CA. Sai Prasad K',
    position: 'Senior Finance Expert',
    imageUrl: '/tst-sai.webp',
    description: [
      'Chartered Accountant with expertise in taxation.',
      'Specializes in financial consulting and auditing.'
    ]
  },
  {
    id: 10,
    name: 'Sachin Pawar',
    position: 'Legal Associate',
    imageUrl: '/Sachin-Pawar.webp',
    description: [
      'Focuses on litigation and dispute resolution.',
      'Handles corporate legal matters and compliance.'
    ]
  }
];
const formatNameForUrl = (name: string) => {
  return name
    .split(' ') // Split the name into an array of words
    .join('-')   // Join the words with hyphens
    .toLowerCase(); // Convert to lowercase for consistency
};
const AboutUsPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="pt-[50px] min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-[#24388F] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">ABOUT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>HOME</span>
            <ChevronRight size={16} />
            <span>ABOUT US</span>
          </div>
        </div>
      </div>
  
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#24388F]">Your Premier Legal & Business Consultancy Partner</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#24388F]">Chanakyatse Consultancy</span> is a pioneering firm dedicated to navigating businesses through the ever-evolving and dynamic landscape they operate in. Recognizing the intricate challenges posed by external factors such as governmental policies, regulatory shifts, and market requirements, our consultancy provides a comprehensive team of experts adept at guiding and supporting businesses at every juncture.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a proactive philosophy centered on the principle &quot;ounce of prevention is better than a pound of cure,&quot; we specialize in addressing current business challenges while strategically averting potential future obstacles. Our commitment lies in ensuring that businesses not only overcome existing issues but also fortify themselves against unforeseen adversities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a successful lawyer, <span className="font-semibold text-[#24388F]">Adv. Bindu S Chettur</span> has witnessed firsthand the intersection of legal intricacies and business challenges, propelling her to combine her profound legal expertise with keen business acumen to create Chanakyatse Consultancy, a firm that stands at the forefront of innovation, strategy, and excellence.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 h-64 md:h-[400px] rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/Chan_Abt.webp" 
                alt="About Us" 
                className="rounded-lg w-full h-full object-cover object-center" 
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
  
        {/* Core Values Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Target className="text-[#24388F] h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-[#24388F]">Our Mission</h3>
              <p className="text-gray-600">To deliver transformative solutions that drive sustainable growth and create lasting value for our clients.</p>
            </CardContent>
          </Card>
  
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Users className="text-[#24388F] h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-[#24388F]">Our Vision</h3>
              <p className="text-gray-600">To be the catalyst for positive change in businesses worldwide through innovative consulting solutions.</p>
            </CardContent>
          </Card>
  
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <BarChart3 className="text-[#24388F] h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-[#24388F]">Our Expertise</h3>
              <p className="text-gray-600">Combining legal knowledge with innovative strategies to deliver measurable results.</p>
            </CardContent>
          </Card>
  
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Award className="text-[#24388F] h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-[#24388F]">Our Impact</h3>
              <p className="text-gray-600">Creating lasting positive change through sustainable solutions and strategic counsel.</p>
            </CardContent>
          </Card>
        </div>
  
        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#24388F]">Our Team of Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-full h-48 sm:h-56 md:h-64 mx-auto bg-gray-200 overflow-hidden">
                    <Image
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center" 
                      height={1000}
                      width={1000}
                    />
                  </div>
                  <div className="p-4 md:p-6 space-y-3">
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-[#24388F] mb-1">{member.name}</h3>
                      <p className="mb-3 text-sm md:text-base text-gray-600">{member.position}</p>
                    </div>
                    <Link
  href={`/about/${formatNameForUrl(member.name)}`}
  className="mt-4 w-full sm:w-auto bg-[#24388F] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm md:text-base"
>
  About Me
</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
  
      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">{selectedMember.name}</h2>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Responsibility:</h3>
                    <p className="text-gray-600">{selectedMember.position}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Experience:</h3>
                    <div className="space-y-4 mt-2">
                      {selectedMember.description?.map((paragraph, index) => (
                        <p key={index} className="text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="w-full flex justify-center">
                  <Image
                    src={selectedMember.imageUrl} 
                    alt={selectedMember.name} 
                    className="w-72 h-72 object-cover rounded-lg"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default AboutUsPage;