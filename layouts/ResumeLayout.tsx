import React from 'react'
import Timeline from '@/components/Timeline'
import Introduction from '@/components/Introduction'
import Publications from '@/components/Publications'
import PetProjects from '@/components/PetProjects'

interface TimelineItem {
  startYear: number
  endYear?: number
  title: string
  description: string
  logo: string
}

interface Publication {
  title: string
  authors: string
  where: string
  year: number
  link: string
}

interface Project {
  title: string
  description: string
  imgSrc: string
  href: string
}

interface ResumeLayoutProps {
  content: TimelineItem[]
  personalInfo: {
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
  publications: Publication[]
  projects: Project[]
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({
  content,
  personalInfo,
  publications,
  projects,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Introduction {...personalInfo} />
      <Timeline items={content} />
      <PetProjects projects={projects} />
      <Publications publications={publications} />
    </div>
  )
}

export default ResumeLayout
