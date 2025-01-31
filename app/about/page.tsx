// 'use client';

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Target, Users, BarChart3, Award, ChevronRight, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';


// interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   imageUrl: string;
//   description: string[];
// }

// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: 'Adv. Bindu S. Chettur',
//     position: 'Founder and Managing Director',
//     imageUrl: '/Adv-Binschet.webp',
//     description: [
//       'As a successful lawyer, Adv. Bindu S Chettur has witnessed firsthand the intersection of legal intricacies and business challenges.',
//       'Her profound legal expertise combined with keen business acumen led to the creation of Chanakyatse Consultancy.'
//     ]
//   },
//   {
//     id: 2,
//     name: 'Adv. Shaffi Mather',
//     position: 'Public Policy Analyst',
//     imageUrl: '/ShaffiMather.webp',
//     description: [
//       'Expert in public policy and regulatory affairs.',
//       'Extensive experience in policy analysis and implementation.'
//     ]
//   },
//   {
//     id: 3,
//     name: 'Adv. Amjith M Anandhan',
//     position: 'Senior Legal Associate',
//     imageUrl: '/Amjith.webp',
//     description: [
//       'Specializes in corporate law and commercial litigation.',
//       'Experienced in handling complex legal matters and disputes.'
//     ]
//   },
//   {
//     id: 4,
//     name: 'Adv. Ashok GV',
//     position: 'Senior Legal Associate',
//     imageUrl: '/tst-ask.webp',
//     description: [
//       'A dispute resolution counsel, Ashok represents clients in the food and beverages, healthcare, pharmaceuticals, technology, banking and financial services, real estate and construction, ecommerce and hospitality areas, in domestic and international dispute resolution.',
//       'His service areas cover contract violations, company law proceedings, prosecution under India\'s Food Standards and Safety Act, 2006 and Prevention of Food Adulteration Act, and IP rights enforcement.',
//       'Ashok also advises clients in the U.K., Singapore, India and Switzerland on their global contractual requirements. He also assists clients in these jurisdictions for Investment funding, Intellectual Property protection and Enforcement, Telecommunication regulations, space law, taxation, gender sensitivity and data privacy.',
//       'Ashok is an invited speaker at the New Delhi-based independent think tank, the Observer Research Foundation, the National Law School of India University, Bengaluru, Indian Institute of Technology-Kharagpur, Indian Institute of Management- Bengaluru and at sexual violence awareness-building and sensitisation programmes for the police and judges.'
//     ]
//   },
//   {
//     id: 5,
//     name: 'Adv. Jinesh',
//     position: 'Senior Finance Expert',
//     imageUrl: '/tst-man.webp',
//     description: [
//       'Expert in financial planning and analysis.',
//       'Specializes in corporate finance and investment strategies.'
//     ]
//   },
//   {
//     id: 7,
//     name: 'Ashwin Chaturvedi',
//     position: 'Lawyer and Head of Business Strategy',
//     imageUrl: '/Ashwin.webp',
//     description: [
//       'Specializes in contract law and negotiations.',
//       'Handles corporate legal affairs and compliance matters.'
//     ]
//   },
//   {
//     id: 8,
//     name: 'Raj Naveen',
//     position: 'Senior Finance Expert',
//     imageUrl: '/tst-raj.webp',
//     description: [
//       'Expert in financial planning and risk management.',
//       'Provides strategic financial guidance to clients.'
//     ]
//   },
//   {
//     id: 9,
//     name: 'CA. Sai Prasad K',
//     position: 'Senior Finance Expert',
//     imageUrl: '/tst-sai.webp',
//     description: [
//       'Chartered Accountant with expertise in taxation.',
//       'Specializes in financial consulting and auditing.'
//     ]
//   },
//   {
//     id: 10,
//     name: 'Sachin Pawar',
//     position: 'Legal Associate',
//     imageUrl: '/Sachin-Pawar.webp',
//     description: [
//       'Focuses on litigation and dispute resolution.',
//       'Handles corporate legal matters and compliance.'
//     ]
//   }
// ];
// const formatNameForUrl = (name: string) => {
//   return name
//     .split(' ') // Split the name into an array of words
//     .join('-')   // Join the words with hyphens
//     .toLowerCase(); // Convert to lowercase for consistency
// };
// const AboutUsPage = () => {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

//   return (
//     <div className="pt-[50px] min-h-screen bg-slate-50">
//       {/* Hero Section */}
//       <div className="bg-[#24388F] text-white py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-4">ABOUT US</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <span>HOME</span>
//             <ChevronRight size={16} />
//             <span>ABOUT US</span>
//           </div>
//         </div>
//       </div>
  
//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-[#24388F]">Your Premier Legal & Business Consultancy Partner</h2>
//             <div className="space-y-4">
//               <p className="text-gray-600 leading-relaxed">
//                 <span className="font-semibold text-[#24388F]">Chanakyatse Consultancy</span> is a pioneering firm dedicated to navigating businesses through the ever-evolving and dynamic landscape they operate in. Recognizing the intricate challenges posed by external factors such as governmental policies, regulatory shifts, and market requirements, our consultancy provides a comprehensive team of experts adept at guiding and supporting businesses at every juncture.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 With a proactive philosophy centered on the principle &quot;ounce of prevention is better than a pound of cure,&quot; we specialize in addressing current business challenges while strategically averting potential future obstacles. Our commitment lies in ensuring that businesses not only overcome existing issues but also fortify themselves against unforeseen adversities.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 As a successful lawyer, <span className="font-semibold text-[#24388F]">Adv. Bindu S Chettur</span> has witnessed firsthand the intersection of legal intricacies and business challenges, propelling her to combine her profound legal expertise with keen business acumen to create Chanakyatse Consultancy, a firm that stands at the forefront of innovation, strategy, and excellence.
//               </p>
//             </div>
//           </div>
//           <div className="bg-gray-100 h-64 md:h-[400px] rounded-lg">
//             <div className="w-full h-full flex items-center justify-center">
//               <Image
//                 src="/Chan_Abt.webp" 
//                 alt="About Us" 
//                 className="rounded-lg w-full h-full object-cover object-center" 
//                 height={1000}
//                 width={1000}
//               />
//             </div>
//           </div>
//         </div>
  
//         {/* Core Values Section */}
//         <div className="grid md:grid-cols-4 gap-6 mb-16">
//           <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
//             <CardContent className="p-0 space-y-4">
//               <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
//                 <Target className="text-[#24388F] h-6 w-6" />
//               </div>
//               <h3 className="font-bold text-xl text-[#24388F]">Our Mission</h3>
//               <p className="text-gray-600">To deliver transformative solutions that drive sustainable growth and create lasting value for our clients.</p>
//             </CardContent>
//           </Card>
  
//           <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
//             <CardContent className="p-0 space-y-4">
//               <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
//                 <Users className="text-[#24388F] h-6 w-6" />
//               </div>
//               <h3 className="font-bold text-xl text-[#24388F]">Our Vision</h3>
//               <p className="text-gray-600">To be the catalyst for positive change in businesses worldwide through innovative consulting solutions.</p>
//             </CardContent>
//           </Card>
  
//           <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
//             <CardContent className="p-0 space-y-4">
//               <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
//                 <BarChart3 className="text-[#24388F] h-6 w-6" />
//               </div>
//               <h3 className="font-bold text-xl text-[#24388F]">Our Expertise</h3>
//               <p className="text-gray-600">Combining legal knowledge with innovative strategies to deliver measurable results.</p>
//             </CardContent>
//           </Card>
  
//           <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
//             <CardContent className="p-0 space-y-4">
//               <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
//                 <Award className="text-[#24388F] h-6 w-6" />
//               </div>
//               <h3 className="font-bold text-xl text-[#24388F]">Our Impact</h3>
//               <p className="text-gray-600">Creating lasting positive change through sustainable solutions and strategic counsel.</p>
//             </CardContent>
//           </Card>
//         </div>
  
//         {/* Team Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-[#24388F]">Our Team of Experts</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {teamMembers.map((member) => (
//               <Card key={member.id} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="p-0">
//                   <div className="w-full h-48 sm:h-56 md:h-64 mx-auto bg-gray-200 overflow-hidden">
//                     <Image
//                       src={member.imageUrl} 
//                       alt={member.name} 
//                       className="w-full h-full object-contain object-center" 
//                       height={1000}
//                       width={1000}
//                     />
//                   </div>
//                   <div className="p-4 md:p-6 space-y-3">
//                     <div>
//                       <h3 className="font-bold text-lg md:text-xl text-[#24388F] mb-1">{member.name}</h3>
//                       <p className="mb-3 text-sm md:text-base text-gray-600">{member.position}</p>
//                     </div>
//                     <Link
//   href={`/about/${formatNameForUrl(member.name)}`}
//   className="mt-4 w-full sm:w-auto bg-[#24388F] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm md:text-base"
// >
//   About Me
// </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
  
//       {/* Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-end p-4">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X size={24} />
//               </button>
//             </div>
            
//             <div className="px-8 pb-8">
//               <div className="grid md:grid-cols-2 gap-8">
//                 {/* Left Content */}
//                 <div className="space-y-6">
//                   <h2 className="text-4xl font-bold text-gray-900">{selectedMember.name}</h2>
                  
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Responsibility:</h3>
//                     <p className="text-gray-600">{selectedMember.position}</p>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Experience:</h3>
//                     <div className="space-y-4 mt-2">
//                       {selectedMember.description?.map((paragraph, index) => (
//                         <p key={index} className="text-gray-700">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Right Content */}
//                 <div className="w-full flex justify-center">
//                   <Image
//                     src={selectedMember.imageUrl} 
//                     alt={selectedMember.name} 
//                     className="w-72 h-72 object-cover rounded-lg"
//                     height={1000}
//                     width={1000}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
  
// };

// export default AboutUsPage;




'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    name: 'Ashwin Chaturvedi',
    position: 'Lawyer and Head of Business Strategy',
    imageUrl: '/Ashwin.webp',
    description: [
      'Specializes in contract law and negotiations.',
      'Handles corporate legal affairs and compliance matters.'
    ]
  },
  {
    id: 6,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 ">
      {/* Hero Section */}
      <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
>
  <div className="container mx-auto px-4 relative z-20">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center"
    >
      <motion.h1 
        className="text-5xl font-bold mb-4 font-serif bg-gradient-to-r from-[#24388F] to-slate-800 bg-clip-text text-transparent"
        initial={{ letterSpacing: '-0.02em' }}
        animate={{ letterSpacing: '0.02em' }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        ABOUT US
      </motion.h1>
      
      <motion.div 
        className="flex items-center justify-center gap-2 text-sm text-slate-600"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {/* <motion.span variants={{ hidden: { x: -10 }, visible: { x: 0 } }}>
          HOME
        </motion.span>
        <ChevronRight size={16} />
        <motion.span 
          variants={{ hidden: { x: 10 }, visible: { x: 0 } }}
          className="font-medium text-[#24388F]"
        >
          ABOUT US
        </motion.span>*/}

      </motion.div> 
    </motion.div>
  </div>

  {/* Animated background elements */}
  <motion.div 
    className="absolute inset-0 z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#24388F]/10 rounded-full blur-xl animate-float" />
    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#24388F]/05 rounded-full blur-lg animate-float-delayed" />
  </motion.div>
</motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-24"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* <motion.div variants={cardVariants} className="space-y-8">
            <h2 className="text-4xl font-bold text-[#24388F] font-serif">
              Your Premier Legal & Business Consultancy Partner
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <span className="font-semibold text-[#24388F]">Chanakyatse Consultancy</span> is a pioneering firm dedicated to navigating businesses through the ever-evolving and dynamic landscape they operate in.
              </p>
              <p className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                With a proactive philosophy centered on the principle &quot;ounce of prevention is better than a pound of cure,&quot; we specialize in addressing current business challenges while strategically averting potential future obstacles.
              </p>
            </div>
          </motion.div> */}
          <motion.div 
  variants={cardVariants} 
  className="space-y-10"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    className="text-4xl font-bold text-[#24388F] font-serif leading-tight "
  >
    Strategic Legal Solutions<br/>
    <span className="text-3xl text-slate-600 font-medium">Across UAE and India</span>
  </motion.h2>

  <div className="space-y-10">
    <motion.div 
      className="relative group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="absolute text-justify -inset-2 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      <div className="relative space-y-6 text-lg text-gray-700 leading-relaxed">
        <p className="relative z-10 text-justify">
          <span className="font-semibold text-[#24388F]">Chanakyatse Consultancy</span> specializes in 
          <span className="text-[#24388F] font-medium"> corporate management</span>, 
          <span className="text-[#24388F] font-medium"> legal advisory</span>, and 
          <span className="text-[#24388F] font-medium"> strategic development</span> across the UAE and India. 
          Guided by our core principle of prevention over cure, we deliver proactive solutions through:
        </p>

        <motion.div 
          className="grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {[
            'Legal Drafting & Contract Review',
            '24/7 Retainership Legal Support',
            'Corporate Structuring & Compliance',
            'Dispute Resolution Management'
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
              className="flex items-start space-x-3 text-gray-700"
            >
              <ChevronRight className="w-5 h-5 text-[#24388F] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      className="relative pl-6 border-l-4 border-[#24388F]/30"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        Under the leadership of <span className="font-semibold text-[#24388F]">Adv. Bindu S. Chettur</span>, 
        with over two decades of cross-jurisdictional expertise, we combine deep regulatory knowledge with 
        strategic business acumen. Our alliance with 
        <span className="text-[#24388F] font-medium"> Mohamed Salman Advocates</span> enhances our 
        capacity for seamless cross-border solutions through:
      </p>

      <motion.ul 
        className="mt-6 space-y-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {[
          'Multi-jurisdictional legal strategies',
          'Regulatory compliance frameworks',
          'International arbitration support',
          'Business expansion advisory'
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center text-gray-700"
          >
            <div className="w-2 h-2 mr-3 bg-[#24388F] rounded-full" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </div>
</motion.div>

          <motion.div variants={cardVariants} className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Chan_Abt.webp"
              alt="About Us"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24388F]/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { icon: Target, title: 'Our Mission', text: 'To deliver transformative solutions that drive sustainable growth...' },
            { icon: Users, title: 'Our Vision', text: 'To be the catalyst for positive change in businesses worldwide...' },
            { icon: BarChart3, title: 'Our Expertise', text: 'Combining legal knowledge with innovative strategies...' },
            { icon: Award, title: 'Our Impact', text: 'Creating lasting positive change through sustainable solutions...' },
          ].map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full p-8 bg-white/90 backdrop-blur-sm border border-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0 space-y-6">
                  <div className="h-16 w-16 bg-blue-100/30 rounded-2xl flex items-center justify-center">
                    <item.icon className="text-[#24388F] h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#24388F]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#24388F] text-center mb-16 font-serif">
            Our Team of Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Card className="h-full bg-white border border-blue-50 overflow-hidden transition-all duration-300 group-hover:border-blue-200">
                  <CardContent className="p-0">
                    <div className="relative h-72 bg-gray-100 overflow-hidden">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24388F]/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#24388F] mb-2">{member.name}</h3>
                      <p className="text-sm text-blue-600/90 mb-4">{member.position}</p>
                      <Link
                        href={`/about/${formatNameForUrl(member.name)}`}
                        className="inline-flex items-center text-[#24388F] font-medium hover:text-blue-700 transition-colors"
                      >
                        View Profile
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="px-8 pb-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image
                      src={selectedMember.imageUrl}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-[#24388F] font-serif">
                      {selectedMember.name}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                          Position
                        </h3>
                        <p className="text-lg text-gray-700">{selectedMember.position}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                          Experience
                        </h3>
                        <div className="space-y-4 text-justify">
                          {selectedMember.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 text-justify">
                              {paragraph}
                            </p>
                            
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUsPage;