import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#24388F] text-white  pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Chanakyatse Consultancy</h3>
            <p className="text-sm text-gray-300">Your comprehensive partner for all your individual and business needs in India and the UAE.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/resources" className="text-sm text-gray-300 hover:text-white">Resources</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300">#301, Al Serkal 2, Port Saeed Road,Airport Road, Deira, Dubai</p>
            <p className="text-sm text-gray-300">Phone: +91 96330 37870 / +971 54 477 8569</p>
            <p className="text-sm text-gray-300">Email: contact@chanakyatse.com</p>
            <p className="text-sm text-gray-300">Visit Between
            Mon - Fri : 9:00-5.00</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Chanakyatse Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
