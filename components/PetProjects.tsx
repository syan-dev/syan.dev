import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PetProject {
  title: string
  description: string
  imgSrc: string
  href: string
}

interface PetProjectsProps {
  projects: PetProject[]
}

const PetProjects: React.FC<PetProjectsProps> = ({ projects }) => {
  return (
    <div className="my-8 mb-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Pet Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 md:flex-row"
          >
            <div className="relative h-48 md:h-auto md:w-1/3">
              <Image src={project.imgSrc} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <Link
                href={project.href}
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PetProjects
