import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS_ROUTE, TASKS_ROUTE} from '../../utils/consts'


import styles from './Navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate()

  const navigateTo = (page) => {
    switch (page) {
      case 'projects':
        navigate(PROJECTS_ROUTE)
        break;
      case 'tasks':
        navigate(TASKS_ROUTE)
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className={styles.buttons}>
        <div className={styles.buttons__cont}>
          <button className={styles.buttons__btn} onClick={() => navigateTo('projects')}>
              <span className={styles.buttons__project}>
                Проекты
              </span>
          </button>
        </div>
        <div className={styles.buttons__cont}>
          <button className={styles.buttons__btn} onClick={() => navigateTo('tasks')}>
              <span className={styles.buttons__tasks}>
                Задачи
              </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar