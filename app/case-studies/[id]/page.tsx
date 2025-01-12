import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from 'lucide-react'
import { caseStudies } from "../../data/case-studies"

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const study = caseStudies.find(s => s.id === parseInt(id))
  
  return {
    title: study ? `${study.title} | Chanakyatse` : 'Case Study Not Found',
    description: study?.excerpt,
  }
}

export default async function CaseStudyPage({ params}: Props) {
  const { id } = await params
  const study = caseStudies.find(s => s.id === parseInt(id))

  if (!study) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link 
            href="/case-studies"
            className="text-[#1e3a8a] hover:text-[#1e40af] transition-colors"
          >
            Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#1e3a8a]">
        <Image
          src={study.imageUrl}
          alt={study.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/80 to-[#1e40af]/80" />
        <div className="relative container mx-auto h-full flex flex-col justify-end px-4 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-100 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                CHANAKYATSE
              </Link>
              <span>›</span>
              <Link href="/case-studies" className="hover:text-white transition-colors">
                CASE STUDIES
              </Link>
              <span>›</span>
              <span className="text-white">{study.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {study.title}
            </h1>
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={study.date}>
                  {new Date(study.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div>Client: {study.client}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              {study.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().endsWith(':')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      {paragraph}
                    </h2>
                  )
                }
                
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside mb-4 text-gray-600">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="mb-2">{item.substring(2)}</li>
                      ))}
                    </ul>
                  )
                }

                if (/^\d+\./.test(paragraph.trim())) {
                  return (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {paragraph.split('\n')[0]}
                      </h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {paragraph.split('\n').slice(1).map((item, i) => (
                          <li key={i} className="mb-2">{item.substring(2)}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                return (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-colors"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

