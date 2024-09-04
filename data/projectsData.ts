interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Online Python IDE',
    description: `ReadyPy is a Python IDE that runs entirely in the browser. It provides a user-friendly interface for writing, editing, and running Python code without the need to install any software locally. To try out ReadyPy, you can visit the demo website at readypy.com.`,
    imgSrc: '/static/images/projects/readypy.png',
    href: 'https://readypy.com',
  },
  {
    title: 'Dictation Daily',
    description: `Dictation Daily is a web app that helps users improve their English listening and typing skills. It provides a collection of dictation exercises that users can practice with. I use Youtube as the source of the audio files, and the app is built with React and Next.js.`,
    imgSrc: '/static/images/projects/dictationdaily.png',
    href: 'https://dictationdaily.com',
  },
]

export default projectsData
