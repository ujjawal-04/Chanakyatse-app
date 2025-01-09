'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'ASSOCIATIONS', href: '/associations' },
  { name: 'RESOURCES', href: '/resources' },
  { name: 'JOIN US', href: '/join' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-40 border-b">
        <div className="container mx-auto px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Chanakyatse Consultancy"
                width={250}
                height={160}
                className="w-30 h-20"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className='bg-[#24388F]'>
                <Link href="/contact" className="bg-[#24388F] text-white px-4 py-2 rounded-md hover:bg-[#1A2C7C] transition-colors">
                  CONTACT US
                </Link>
              </Button>
            </nav>

            <button
              className="md:hidden z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4">
          <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-6">
            <X className="h-6 w-6 text-gray-700" />
          </button>

          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 mt-4 text-base font-medium text-white bg-[#24388F] rounded-md text-center hover:bg-[#1A2C7C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
