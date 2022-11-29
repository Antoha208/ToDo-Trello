import React, { useState } from 'react'


import Navbar from '../../components/Navbar/Navbar.js'
import Tasks from '../../components/Tasks/Tasks.js'
import { ContextTasks } from './contextTasks.js'
import styles from './TasksPage.module.css'


const TasksPage = () => {
  const [modalTask, setModalTask] = useState(false)

  return (
    <ContextTasks.Provider value = {{
      modalTask, setModalTask
    }}
    >
      <div>
        <Navbar />
        <div className = {styles.content}>
          <Tasks />
        </div>
      </div>
    </ContextTasks.Provider>
  )
}

export default TasksPage