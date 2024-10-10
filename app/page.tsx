import React from 'react'
import ResumeLayout from '@/layouts/ResumeLayout'
import projectsData from '@/data/projectsData'

const personalInfo = {
  name: 'Sy An NGUYEN',
  title: 'AI Research Engineer',
  about:
    'Passionate about pushing the boundaries of AI technology and its applications in autonomous systems and education.',
  photo: '/static/images/avatar.jpg',
  links: {
    googlescholar: 'https://scholar.google.com/citations?user=e7KLgDAAAAAJ&hl=en',
    email: 'syan.vn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/syandev/',
  },
  cvLink: '/static/pdf/mycv.pdf',
}

const timelineData = [
  {
    startYear: 2024,
    title: 'Université Grenoble Alpes',
    description:
      'I am taking a gap in my career to pursue my dream of studying abroad in France. I am fortunate to have received a full scholarship to UGA, one of the top universities for computer science in France.',
    logo: '/static/images/resume/uga_logo.png',
  },
  {
    startYear: 2021,
    endYear: 2024,
    title: 'akaBot | FPT Corporation',
    description:
      "At akaBot, I grew from a Junior AI Engineer to an AI Engineering Manager, gaining experience in both technical work and team leadership. As a Junior Engineer, I was honored as “Employee of the Year” for my role in launching akaBot Vision, a system that could handle thousands of document extractions per hour. After that, I was promoted to AI Engineering Manager, where I led the AI team and developed a product roadmap that helped us release successful products to global customers. I also played a key role in akaBot being recognized for the first time as a 'Major Contender' in the Everest Group RPA PEAK Matrix, and I contributed to the company's first US patent.",
    logo: '/static/images/resume/akaBot_logo.png',
  },
  {
    startYear: 2020,
    endYear: 2021,
    title: 'VinAI | VinGroup Conglomerates',
    description:
      'VinAI is the top research company in Vietnam. I was fortunate to work with some of the top AI researchers in the world. I was involved in the development of a self-driving car project, where I was responsible for the development of the road segmentation module and the lane-line classification module.',
    logo: '/static/images/resume/vinai_logo.png',
  },
  {
    startYear: 2015,
    endYear: 2021,
    title: 'Hanoi University of Science and Technology',
    description:
      'HUST is the top university in Vietnam for computer sience. During my time at HUST, I won over three exchange scholarships to study in Japan, Finland, and Indonesia. These opportunities helped me broaden my personal and professional horizons. I was also involved in several research projects, including the development of an AI-assisted system for polyp detection and classification. As a core member of the project, I successfully presented the proof of concept and secured sponsorship from the Vingroup Innovation Foundation. At the end of my studies, I received the Best Presentation Award for my thesis.',
    logo: '/static/images/resume/hust_logo.png',
  },
]

const publicationsData = [
  {
    title: 'Machine learning systems for auto-splitting and classifying documents',
    authors: 'B. D. Giap, N. S. An, D. Q. Dat',
    where: 'United States Patent and Trademark Office',
    year: 2023,
    link: 'https://patents.google.com/patent/US11830270B1/en',
  },
  {
    title: 'BlazeNeo: Blazing fast polyp segmentation and neoplasm detection',
    authors: 'N. S. An, P. N. Lan, D. V. Hang, D. V. Long, T. Q. Trung, N. T. Thuy, D. V. Sang',
    where: 'IEEE Transactions on Parallel and Distributed Systems',
    year: 2022,
    link: 'https://arxiv.org/abs/2203.00129',
  },
  {
    title: 'NeoUNet: Towards accurate colon polyp segmentation and neoplasm detection',
    authors: 'P. N. Lan, N. S. An, D. V. Hang, D. V. Long, T. Q. Trung, N. T. Thuy, D. V. Sang',
    where: 'International Symposium on Visual Computing',
    year: 2022,
    link: 'https://arxiv.org/abs/2107.05023',
  },
  // Add more publications as needed
]

export default function Page() {
  return (
    <ResumeLayout
      content={timelineData}
      personalInfo={personalInfo}
      publications={publicationsData}
      projects={projectsData}
    />
  )
}
