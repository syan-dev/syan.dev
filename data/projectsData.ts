interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Online Python IDE',
    description: `ReadyPy is a Python IDE that runs entirely in the browser. It provides a user-friendly interface for writing, editing, and running Python code without the need to install any software locally. To try out ReadyPy, you can visit the demo website at readypy.com.`,
    imgSrc: '/static/images/projects/readypy.png',
    href: 'https://readypy.com',
  },
]

export default projectsData
