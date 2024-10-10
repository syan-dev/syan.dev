import React from 'react'
import Link from 'next/link'

interface Publication {
  title: string
  authors: string
  where: string
  year: number
  link: string
}

interface PublicationsProps {
  publications: Publication[]
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <div className="my-8 mb-12">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li
            key={index}
            className="flex items-start justify-between border-b border-gray-200 pb-4 last:border-b-0 dark:border-gray-700"
          >
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                <Link
                  href={pub.link}
                  className="transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {pub.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{pub.authors}</p>
              <p className="italic text-gray-500 dark:text-gray-500">{pub.where}</p>
            </div>
            <div className="whitespace-nowrap text-gray-500 dark:text-gray-400">{pub.year}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Publications
