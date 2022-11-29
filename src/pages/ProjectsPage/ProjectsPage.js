import React, { useState } from 'react'


import Navbar from '../../components/Navbar/Navbar.js'
import Projects from '../../components/Projects/Projects.js'
import { ContextProjects } from './contextProjects'
import styles from './ProjectsPage.module.css'


const ProjectsPage = () => {
  const [modalProject, setModalProject] = useState(false)

  return (
    <ContextProjects.Provider value = {{
      modalProject, setModalProject
    }}
    >
      <div>
        <Navbar />
        <div className = {styles.content}>
          <Projects />
        </div>
      </div>
    </ContextProjects.Provider>
  )
}

export default ProjectsPage
