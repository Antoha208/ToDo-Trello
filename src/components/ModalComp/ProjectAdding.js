import React, {useState, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../../store/projectsReducer'
import { ContextProjects } from '../../pages/ProjectsPage/contextProjects'
import styles from './ModalComp.module.css'

const ProjectAdding = () => {
    const { setModalProject } = useContext(ContextProjects)
    const dispatch = useDispatch()
    const projectsStore = useSelector(state => state.projects.projects)
    const tasksStore = useSelector(state => state.tasks.tasks)

    const [project, setProject] = useState('')

    const nameProject = () => {
        const counter = projectsStore.length + 1
        const projectObj = {
            id: counter,
            name: project,
            tasks: 0
        }

        if (project !== '') {
            dispatch(addProject(projectObj))
            setModalProject(false)
        } else {
            alert('Поле не может быть пустым')
        }
    }

    return (
        <>
            <div 
                className={styles.modal__cross}
                onClick={() => setModalProject(false)}>
                    X
            </div>
            <div className={styles.modal__titleTasks}>Введите название проекта</div>
            <input 
                placeholder='Название'
                className={styles.modal__input}
                onChange={(e) => setProject(e.target.value)}>
            </input>
            <div 
                className={styles.modal__accept}
                onClick={nameProject}>
                    Добавить
            </div>
        </>
    )
}
                
export default ProjectAdding