import Image from "next/image";
import { Metadata } from "next";

// Define the member type
type Member = {
  name: string;
  designation: string;
  imageUrl: string;
  experience: string;
};

// Your members data
const members: Member[] = [
  {
    name: "Adv. Bindu S. Chettur",
    designation: "Founder and Managing Director",
    imageUrl: "/Adv-Binschet.webp",
    experience: "Advocate Bindu S. Chettur is the Founder and Managing Director of Chanakyatse Consultancy, a comprehensive end-to-end management consultancy firm operating in the UAE and India. She holds the position of Senior Associate at Mohamed Salman Advocate & Legal Consultants in Dubai. With over 32 years of distinctive experience spanning the Asia-Pacific and the Middle East, she served as a senior lawyer at the Indian Consulate, Dubai, for more than two decades.As an accomplished Legal Consultant with expertise in mainland UAE and rights of audience in the DIFC and ADGM Courts, she possesses extensive experience in Criminal Law, Civil Law, Corporate and Commercial Law, Dispute Resolution, Cross-border Maritime Law, Family Law, Labour Law, Real Estate Law, Startups and Venture Capital, Intellectual Property, Construction Law, Wills and Probate, Execution of foreign judgments overseas, Bankruptcy Law, Setting up businesses, and Debt Recovery cases (in association with Interpol and state officials). Furthermore, she is among the few lawyers licensed by the DIFC Wills & Probate Registry to register common law-compliant Wills for foreign investors and expatriates in Dubai, UAE.",
  },
  {
    name: "Adv. Shaffi Mather",
    designation: "Public Policy Analyst",
    imageUrl: "/ShaffiMather.webp",
    experience: "Shaffi Mather is a Serial Entrepreneur, Lawyer & Public Policy Analyst. He is presently an Advisor at Stanford ChangeLabs and was previously an Associate at Harvard Asia Center. He leads MUrgency Inc., a global business incubator / accelerator based out of Silicon Valley, and Dubai. Previously, Shaffi founded the pioneering Emergency Ambulance Service in India (Dial 1298 / Ziqitza Health Care Limited – www.zhl.in) which has grown to be the largest ‘for profit’ Ambulance Company in the Developing World and LifeSupporters Institute of Health Sciences which has grown to be Asia’s largest Pre-hospital Care Training Organization. Professionally, Shaffi worked in Reliance Industries Limited and Essel Group respectively in early 2000s. In Essel, he led the retail mall development and in Reliance, he led the roll out of Reliance Web World Stores across 500+ cities / towns across India. He also undertook multiple financial structuring and restructuring for Reliance in several associate companies of Reliance / Ambani family. While leading his family company Mather Projects Private Limited, Shaffi setup the first concept shopping mall in India under the brand “The Esplanade” bringing together 25 leading brands through exclusive stores, and a family entertainment center. He also intervened decades later to save and restructure this company and managed to restore confidence amongst the 770 customers in 5 projects and completed them showcasing his adeptness in crisis management and strategic turnaround.An alumnus of prestigious institutions such as Harvard University, London School of Economics, and University of Pittsburgh, amongst many others, Shaffi’s accolades include Young Global Leader, World Responsible Leader, Asia 21 Fellow & Asia Young Leader, Ted Fellow, Kenneth Galbraith Scholar (Harvard University), British Chevening Fellow amongst others. His TED Speech to assist citizens fight bribery demands has 600000+ views.Shaffi was invited by President Obama to the US President’s Summit on Social Entrepreneurship and a member with whom President Obama had discussions during his India visit. Shaffi was also selected as a Future International Leader by British Government.",
  },
  {
    name: "Adv. Amjith M Anandhan",
    designation: "Senior Legal Associate",
    imageUrl: "/Amjith.webp",
    experience: "Adv. Amjith M Anandhan is a highly skilled and accomplished lawyer with expertise in civil and commercial litigation. with extensive experience in handling complex Legal matters, he has established a reputation for delivering effective legal solutions  to his clients. Throughout his career, Adv. Amjith M Anandhan has successfully represented clients before various High courts, the supreme court, and Tribunals such as The National Company Law Tribunal.) (NCLT) and The National Company Law Tribunal Appellate Tribunal (NCLAT). His deep understanding of the legal system and meticulous approach to case preparation have resulted in favourable outcomes for his clients in diverse litigation scenarios. In addition to his Litigation and dispute resolution practice, Adv. Amjith M. Anandhan has also served as Counsel in arbitrations before prestigious institutions such as the Dubai International Arbitration Centre (DIAC) and the London Court of International Arbitration (LCIA). He possesses a comprehensive understanding of arbitration procedures and strategies, enabling him to effectively advocate for his client’s interests and secure favourable arbitration awards. Adv. Amjith M Anandhan’s commitment to excellence and client satisfaction is reflected in his approach to Legal practice. He combines his in-depth Legal knowledge with strong analytical skills to provide strategic advice and representation to his clients. Known for his strong courtroom presence, persuasive arguments and attention to detail, he consistently delivers exceptional results. With a track record of handling complex litigation cases and successful representation in arbitrations, Adv. Amjith M Anandhan is a trusted Legal professional who strives for excellence and works diligently to protect and advance his client’s interests.",
  },
  {
    name: "Adv. Ashok GV",
    designation: "Senior Legal Associate",
    imageUrl: "/tst-ask.webp",
    experience: "A dispute resolution counsel, Ashok represents clients in the food and beverages, healthcare, pharmaceuticals, technology, banking and financial services, real estate and construction, ecommerce and hospitality areas, in domestic and international dispute resolution. His service areas cover contract violations, company law proceedings, prosecution under India’s Food Standards and Safety Act, 2006 and Prevention of Food Adulteration Act, and IP rights enforcement. Ashok also advises clients in the U.K., Singapore, India and Switzerland on their global contractual requirements. He also assists clients in these jurisdictions for  Investment funding, Intellectual Property protection and Enforcement, Telecommunication regulations, space law, Intellectual Property Protection and Enforcement and Licensing, space law, taxation, gender sensitivity and data privacy. Ashok is an invited speaker at the New Delhi-based independent think tank, the Observer Research Foundation, the National Law School of India University, Bengaluru, Indian Institute of Technology-Kharagpur, Indian Institute of Management- Bengaluru and at sexual violence awareness-building and sensitisation programmes for the police and judges.",
  },
  {
    name: "Adv. Jinesh",
    designation: "Senior Finance Expert",
    imageUrl: "/tst-man.webp",
    experience: "",
  },
  {
    name: "Adv. Sindhya S Nair",
    designation: "Legal Associate",
    imageUrl: "/Sindhya.webp",
    experience: "Sindhya is a lawyer with 10 years of PQE primarily focusing on corporate commercial matters. She joined Chanakyatse Consultancy in the year 2022. She has completed Post Graduate Diploma in Air Transport Law and has worked with one of the leading low cost carriers in UAE and with another lead company in the UAE. She has been involved in:- Advising on various aspects of business in UAE, High value sale and purchase deals, Joint ventures, Preparing broad range of commercial agreements, Negotiation of various commercial deals on behalf clients, Drafting DIFC Wills, UAE Wills and India Wills, ADGM Arbitration. In India she has gained experience in criminal litigation as defence counsel and has bagged few remarkable achievements.",
  },
  {
    name: "Ashwin Chaturvedi",
    designation: "Legal Associate",
    imageUrl: "/Ashwin.webp",
    experience: "Ashwin is a law graduate holding an integrated B.B.A LL.B (Hons.) degree from India. He has completed various courses in association with Cornell University, New York and received Outstanding (O) grade in Legal Writing. His professional journey includes three years of legal experience in Dubai  gaining valuable experience in all types of legal drafting, client dealing, and cases involving civil, corporate, and personal law. He has also worked with Lex Vid Partners in India wherein he has dealt with cases pertaining to civil and criminal law in district and high courts, Real Estate Regulatory Authority (RERA), Madhya Pradesh State Consumer Disputes Redressal Commission, National Green Tribunal and Madhya Pradesh Electricity Regulatory Commission. His leadership skills shine through his role as the Founder and Managing Director at Grab the Mic,  National All States Head and Legal HR Personnel at Youth India Foundation, where he efficiently managed legal and organizational responsibilities at a national level. Accomplished in public speaking, competitive debating, and content writing, his passion for Model United Nations is evident in various accolades and leadership roles at both national and international conferences, showcasing his meticulous research, public speaking, and diplomatic prowess. He has also worked as an Associate Member with Law Informants and as a Content Developer with Law Mentoring. Ashwin is also the founder of Grab the Mic, a platform for personality development and public speaking courses wherein he has trained numerous individuals in the areas of corporate training, personality development, and public speaking.",
  },
  {
    name: "Raj Naveen",
    designation: "Senior Finance Expert",
    imageUrl: "/tst-raj.webp",
    experience: "Raj Naveen is an accomplished business finance professional with over 20 years of experience in the Media & Entertainment industry. He has held CFO positions at esteemed companies such as Sony Pictures, WPP, Interpublic Group, and Publicis, working across regions like the Middle East, Africa, India, and the USA. Raj’s expertise lies in overseeing operations across diverse international markets simultaneously, managing 62 companies in 17 countries with a combined turnover of around $1 billion. He has mentored startups and SMEs across industries, assisting them in developing business plans, securing funding, and driving transformative growth. With a successful track record of closing over 50 M&A deals, including a notable $265 million acquisition, Raj has proven proficiency in business valuation and growth strategies. Additionally, Raj excels in optimizing business processes through organizational restructuring, business development, funds management, automation, compliance, and the implementation of measurable KPIs. Based in the USA, he frequently travels to various regions to pursue professional opportunities.",
  },
  {
    name: "CA. Sai Prasad K",
    designation: "Senior Finance Expert",
    imageUrl: "/tst-sai.webp",
    experience: "Mr. Sai Prasad, an accomplished finance professional, holds the titles of BSc, ACA, CMA, CFM, CIFR, CFRM, and PGEM, demonstrating a commitment to continuous learning. Currently serving as the Virtual CFO at PanApps Inc in Virginia, US, Sai Prasad is a strategic leader with nearly two decades of progressive experience. His expertise encompasses financial management, cost reduction, and implementing Corporate acquisitions as well as internal controls for financial discpline across diverse sectors in the Middle East and India. He excels in financial management pertaining to international projects, enforcing compliance with global accounting standards, and contributing to organizational success. His leadership extends to team management, fostering collaboration, and cultivating high-performing teams. Prior roles include Chief Financial Officer at Altec Corporation Limited, where he played a pivotal role in strategic acquisitions and the successful turnaround of the company. Sai Prasad’s contributions span industries such as Manufacturing, Trading, and Service, showcasing his versatility and impact on organizational growth. Beyond his professional achievements, Sai Prasad actively contributes as a guest faculty member in multiple institutions covering various subjects like GST(VAT), M&A, ACCA & CMA among others highlighting his dedication to education and knowledge sharing. His diverse skill set, effective communication, and solid analytical skills position him as a valuable asset in the finance and business consulting field. His extensive background includes financial consultancy at Stratfin Consultants & Engineers and leadership roles in companies based in Oman, Qatar, and India. CA Sai Prasad’s multifaceted experience and expertise make him a seasoned professional in the global finance arena.",
  },
  {
    name: "Sachin Pawar",
    designation: "Legal Associate",
    imageUrl: "/Sachin-Pawar.webp",
    experience: "Sachin R. Pawar is a well-regarded Lawyer specializing in criminal Litigation and defence. With extensive experience in the field, he is widely recognized for his expertise and success in representing clients in criminal. trials and bail proceedings across different Levels of the Indian judicial system. Having defended numerous clients in criminal trials, Sachin R. Pawar has developed a deep understanding of the intricacies of criminal law and the complexities involved in criminal defence. His sharp Legal acumen, combined with his unwavering dedication to protecting the rights and interests of his clients, has resulted in favourable outcomes in a wide range of criminal, cases. Sachin R. Pawar has appeared before various trial courts, High courts, and the Supreme Court, showcasing his proficiency in navigating the Legal Landscape at different levels of the Indian judiciary. His comprehensive knowledge of criminal law, meticulous case preparation, and persuasive advocacy skills have contributed to his successful, track record in securing acquittals, reduced charges, and favorable judgments for his clients. Additionally, Sachin R. Pawar holds the esteemed position of senior Panel Advocate for the Union of India before the High Court of Bombay. In this role, he represents the interests of the Union of India and demonstrates his ability to handle complex Legal matters and effectively argue cases on behalf of the A government. Known for his unwavering commitment to justice and client advocacy, Sachin R. Pawar is highly regarded by both clients and peers for his professionalism, integrity, and relentless pursuit of legal excellence He approaches each case with utmost dedication, diligently examining evidence, crafting robust legal strategies, and providing sound legal advice to his clients. With a reputation built- on trust, expertise, and successful representation, Sachin R. Pawar is a trusted legal professional in the realm of criminal law. Clients can rely on his strong courtroom presence, persuasive arguments, and compassionate approach to secure the best possible outcomes in their criminal- cases.",
  },
];

type PageProps = {
  params: Promise<{ members: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { members: memberName } = await params;
  const member = members.find(
    (m) => m.name.replace(/\s+/g, '-').toLowerCase() === memberName.toLowerCase()
  );

  return {
    title: member ? `${member.name} - ${member.designation}` : 'Member Not Found',
    description: member ? `Profile page for ${member.name}` : 'Member profile not found',
  };
}

export default async function Page({ params }: PageProps) {
  const { members: memberName } = await params;
  const member = members.find(
    (m) => m.name.replace(/\s+/g, '-').toLowerCase() === memberName.toLowerCase()
  );

  if (!member) {
    return <div className="pt-52">Member not found</div>;
  }

  return (
    <div className="pt-24 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <Image 
            src={member.imageUrl} 
            alt={member.name} 
            className="rounded-lg w-full"
            width={400}
            height={400}
          />
        </div>
        <div className="md:w-2/3 md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
          <p className="text-xl font-semibold mb-4">{member.designation}</p>
          <p className="text-lg leading-relaxed">{member.experience}</p>
        </div>
      </div>
    </div>
  );
}
