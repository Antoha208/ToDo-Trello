import React, {useState, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../store/tasksReducer'
import { ContextTasks } from '../../pages/TasksPage/contextTasks'
import styles from './ModalComp.module.css'

const TaskAdding = () => {
    const { setModalTask } = useContext(ContextTasks)
    const dispatch = useDispatch()
    const projectsStore = useSelector(state => state.projects.projects)
    const selectedProjectStore = useSelector(state => state.selectedProject.selectedProject)
    const tasksStore = useSelector(state => state.tasks.tasks)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskTime, setTaskTime] = useState('')
    const [taskExp, setTaskExp] = useState('')
    const [taskPriority, setTaskPriority] = useState(0)
    const [taskStatus, setTaskStatus] = useState('Queue')


    const nameTask = () => {
        const findProject = projectsStore.find(el => el.id === selectedProjectStore.id)
        const counter = tasksStore.length + 1
        const taskObj = {
            projectId: findProject.id,
            id: counter,
            number: selectedProjectStore.tasks + 1,
            title: taskTitle,
            description: taskDescription,
            createdAt: Date.now(),
            timeInProgress: taskTime,
            expDate: taskExp,
            priority: taskPriority,
            attachs: [],
            status: taskStatus,
            subtasks: [],
            comments: []
        }

        if (taskTitle !== '' && !tasksStore.some(el => el.title === taskTitle) && taskPriority <= 5 && taskPriority > 0) {
            dispatch(addTask(taskObj))
            setModalTask(false)
        } else {
            alert('Такая задача уже есть или поле Название пустое. В поле Приоритет может быть только цифра от 1 до 5')
        }
    }

    return (
        <>
            <div 
                className={styles.modal__cross}
                onClick={() => setModalTask(false)}>
                    X
            </div>
            <div className={styles.modal__titleTasks}>Введите название задачи</div>
            <input 
                placeholder='Название'
                className={styles.modal__input}
                onChange={(e) => setTaskTitle(e.target.value)}>
            </input>
            <div className={styles.modal__titleTasks}>Введите описание задачи</div>
            <input 
                placeholder='Описание'
                className={styles.modal__input}
                onChange={(e) => setTaskDescription(e.target.value)}>
            </input>
            <div className={styles.modal__titleTasks}>Введите время отведенное задаче</div>
            <input 
                placeholder='День, неделя, месяц'
                className={styles.modal__input}
                onChange={(e) => setTaskTime(e.target.value)}>
            </input>
            <div className={styles.modal__titleTasks}>Введите дату выполнения задачи</div>
            <input 
                type='date'
                className={styles.modal__input}
                onChange={(e) => setTaskExp(e.target.value)}>
            </input>
            <div className={styles.modal__titleTasks}>Введите приоритет задачи</div>
            <input 
                placeholder='от 1 до 5'
                className={styles.modal__input}
                onChange={(e) => setTaskPriority(e.target.value)}>
            </input>
            <div className={styles.modal__titleTasks}>Выберите статус задачи</div>
            <div className={styles.modal__input}>
                <select className={styles.modal__select} 
                    onChange={(e) => setTaskStatus(e.target.value)}>
                    <option value="Queue">Queue</option>
                    <option value="Development">Development</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div 
                className={styles.modal__accept}
                onClick={nameTask}>
                    Добавить
            </div>
        </>
    )
}
                
export default TaskAdding