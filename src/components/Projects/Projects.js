import React, {useState, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TASKS_ROUTE} from '../../utils/consts'
import { selectProject } from '../../store/selectedProjReducer'

import styles from './Projects.module.css'
import ModalComp from '../ModalComp/ModalComp'
import { ContextProjects } from '../../pages/ProjectsPage/contextProjects'

const Projects = () => {
    const { modalProject, setModalProject } = useContext(ContextProjects)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const projectsStore = useSelector(state => state.projects.projects)
    
    const filterProjects = projectsStore.filter(project => {
        return project.name.toLowerCase().includes(search.toLowerCase())
    })

    const clickedProject = (e) => {
        const selected = projectsStore.find(el => el.name === e.target.innerHTML)
        if (selected) {
            dispatch(selectProject(selected))
            navigate(TASKS_ROUTE)
        } else {
            alert('Ошибка, выберите другой проект')
        } 
    }
    
    return (
        <div>
            <div className={styles.title}>Список проектов</div>
            <input
                className={styles.input}
                placeholder='Поиск'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ol className={styles.list}>
                {filterProjects.map(project => {
                    return (
                        <li 
                            key={project.id}
                            onClick={clickedProject}>
                                {project.name}
                        </li>
                    )
                })}
            </ol>
            <div className={styles.list__addBtn}
                onClick={() => setModalProject(true)}>Добавить проект
            </div>
            {modalProject && (
                <ModalComp />
            )}  
        </div>
    );
  }
  
  export default Projects;