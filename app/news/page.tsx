import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from 'lucide-react'
import {news} from "../../app/data/news"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/news.jpg"
          alt="News Banner"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0" />
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News
          </h1>
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              CHANAKYATSE
            </Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              RESOURCES
            </Link>
            <span>›</span>
            <span className="text-white">NEWS</span>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white text-xs px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div>{article.country}</div>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2 hover:text-[#1e3a8a] transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Link 
                  href={`/news/${article.id}`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-colors"
                >
                  Read Full News
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

