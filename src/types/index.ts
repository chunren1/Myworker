export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  image: string
  githubUrl: string
  demoUrl?: string
  highlights: string[]
}

export interface Profile {
  name: string
  title: string
  avatar: string
  bio: string
  skills: string[]
  social: {
    github: string
    email: string
  }
  resumeUrl?: string
}
