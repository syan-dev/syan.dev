import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcon from '@/components/social-icons'

interface IntroductionProps {
  name: string
  title: string
  about: string
  photo: string
  links: {
    googlescholar: string
    email: string
    linkedin: string
  }
  cvLink: string
}

const Introduction: React.FC<IntroductionProps> = ({
  name,
  title,
  about,
  photo,
  links,
  cvLink,
}) => {
  return (
    <div className="mb-12">
      <div className="mb-8 flex flex-col items-center justify-center md:flex-row md:items-start">
        <div className="mb-6 flex justify-center md:mb-0 md:w-1/3 md:justify-end md:pr-6">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700 md:h-48 md:w-48">
            <Image src={photo} alt={name} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="text-center md:w-2/3 md:max-w-xl md:text-left">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{name}</h1>
          <h2 className="mb-4 text-xl text-gray-700 dark:text-gray-300">{title}</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{about}</p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <SocialIcon kind="mail" href={`mailto:${links.email}`} />
            <SocialIcon kind="googlescholar" href={links.googlescholar} />
            <SocialIcon kind="linkedin" href={links.linkedin} />
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-pink-100 p-4 text-center dark:bg-pink-900">
        <p className="font-medium text-pink-800 dark:text-pink-200">
          I'm interested in Master Internship in France!
          <Link
            href={cvLink}
            className="ml-2 underline hover:text-pink-600 dark:hover:text-pink-300"
          >
            View my CV
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Introduction
