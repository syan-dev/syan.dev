import React from 'react'
import Image from 'next/image'

interface TimelineItem {
  startYear: number
  endYear?: number
  title: string
  description: string
  logo: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const TimelineItem: React.FC<TimelineItem> = ({ startYear, endYear, logo, title, description }) => (
  <div className="mb-8 flex">
    <div className="w-1/6 pr-4 text-right">
      <div className="text-lg text-gray-500 dark:text-gray-400">
        {startYear}
        {endYear && ` - ${endYear}`}
      </div>
    </div>
    <div className="relative w-1/12">
      <div className="absolute left-1/2 top-2 z-10 h-3 w-3 -translate-x-1/2 transform rounded-full bg-gray-400 dark:bg-gray-600"></div>
    </div>
    <div className="w-1/6 pr-4">
      <div className="relative aspect-square w-full">
        <Image
          src={logo}
          alt={`${title} logo`}
          layout="fill"
          objectFit="contain"
          className="dark:invert dark:filter"
        />
      </div>
    </div>
    <div className="w-7/12">
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
)

const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <div className="relative mx-auto max-w-5xl">
    <div className="absolute left-[calc(1/6*100%+1/24*100%-1px)] top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
    {items.map((item, index) => (
      <TimelineItem key={index} {...item} />
    ))}
  </div>
)

export default Timeline
