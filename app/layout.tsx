import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/SmoothScroll";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import LegalChatPopup from '@/components/LegalChatPopup';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanakyatse",
  description: "Comprehensive Partner for all your Individual and Business Needs in India and the UAE",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SmoothScroll/>
//         <Navbar/>
        
//         <main className="relative pt-20 pb-24"> {/* Added padding-bottom for fixed buttons */}
//           {children}
//         </main>

//         <Footer/>
//       {/* Fixed elements container */}
// <div className="fixed bottom-4 right-4 flex flex-col-reverse items-end gap-4 z-50">
//   {/* LegalChatPopup at the bottom */}
//   <div className="flex flex-col gap-4  ">
//     <LegalChatPopup />
//   </div>

//   {/* Action buttons above LegalChatPopup */}
//   <div className=" mb-20 sm:mb-24 md:mb-28">
//     <a
//       href="https://api.whatsapp.com/send?phone=971544778569"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center justify-center text-green-500 hover:text-green-600 transition-colors"
//     >
//       <IoLogoWhatsapp className="w-11 h-12 hover:scale-105 transition-transform" />
//     </a>

//     <a
//       href="tel:+971544778569"
//       className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors"
//     >
//       <IoCall className="w-11 h-12 hover:scale-105 transition-transform" />
//     </a>
//   </div>
// </div>


    
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SmoothScroll/>
//         <Navbar/>
        
//         <main className="relative pt-20 pb-24"> {/* Added padding-bottom for fixed buttons */}
//           {children}
//         </main>

//         <Footer/>
//         {/* Fixed elements container */}
//         <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
//           {/* Action buttons above LegalChatPopup */}
//           <div className="flex flex-col items-center gap-4 mb-20 sm:mb-24 md:mb-28">
//             <a
//               href="https://api.whatsapp.com/send?phone=971544778569"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center text-green-500 hover:text-green-600 transition-colors"
//             >
//               <IoLogoWhatsapp className="w-11 h-12 hover:scale-105 transition-transform" />
//             </a>

//             <a
//               href="tel:+971544778569"
//               className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               <IoCall className="w-11 h-12 hover:scale-105 transition-transform" />
//             </a>
//           </div>

//           {/* LegalChatPopup at the bottom */}
//           <div className="flex flex-col items-center gap-4">
//             <LegalChatPopup />
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        <Navbar />

        <main className="relative pt-20 pb-24"> {/* Added padding-bottom for fixed buttons */}
          {children}
        </main>

        <Footer />
        
        {/* Fixed elements container */}
        <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
          
          {/* Action buttons above LegalChatPopup */}
          <div className="flex flex-col items-center gap-4 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <a
              href="https://api.whatsapp.com/send?phone=971544778569"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-green-500 hover:text-green-600 transition-colors"
            >
              <IoLogoWhatsapp className="w-11 h-12 hover:scale-105 transition-transform" />
            </a>

            <a
              href="tel:+971544778569"
              className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors"
            >
              <IoCall className="w-11 h-12 hover:scale-105 transition-transform" />
            </a>
          </div>

          {/* LegalChatPopup at the bottom */}
          <div className="flex flex-col items-center gap-4">
            <LegalChatPopup />
          </div>
        </div>

      </body>
    </html>
  );
}
