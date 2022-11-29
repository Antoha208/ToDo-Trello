import React, {useContext, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


import ModalComp from '../ModalComp/ModalComp'
import { ContextTasks } from '../../pages/TasksPage/contextTasks'
import styles from './Tasks.module.css'
import { deleteAllTasks, deleteTask } from '../../store/tasksReducer'
import { deleteProject } from '../../store/projectsReducer'
import { selectTask } from '../../store/selectedTaskReducer'

const Tasks = () => {
    const dispatch = useDispatch()
    const { modalTask, setModalTask } = useContext(ContextTasks)
    const [search, setSearch] = useState('')
    const [currentPart, setCurrentPart] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)
    const [drag, setDrag] = useState(false)
    const [taskInfo, setTaskInfo] = useState(false)
    const projectsStore = useSelector(state => state.projects.projects)
    const selectedProjectStore = useSelector(state => state.selectedProject.selectedProject)
    const tasksStore = useSelector(state => state.tasks.tasks)
    const tasksOfProject = tasksStore.filter(el => el.projectId === selectedProjectStore.id)

    const filterTasks = tasksOfProject.filter(task => {
        return task.title.toLowerCase().includes(search.toLowerCase()) || task.number.includes(search)
    })

    const [parts, setParts] = useState([
        {id: 1, title: 'Queue', tasks: filterTasks.filter(task => task.status === 'Queue')},
        {id: 2, title: 'Development', tasks: filterTasks.filter(task => task.status === 'Development')},
        {id: 3, title: 'Done', tasks: filterTasks.filter(task => task.status === 'Done')},
    ])

    const clickedTask = (e) => {
        const selected = tasksStore.find(el => el.title === e.target.innerHTML)
        if (selected) {
            dispatch(selectTask(selected))
            setTaskInfo(true)
        } else {
            alert('Ошибка, выберите другой проект')
        } 
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className === 'task') {
            e.target.style.boxShadow = '0 4px 3px green'
        }
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, part, task) {
        setCurrentPart(part)
        setCurrentTask(task)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, part, task) {
        e.preventDefault()
        const currentIndex = currentPart.tasks.indexOf(currentTask)
        currentPart.tasks.splice(currentIndex, 1)
        const dropIndex = part.tasks.indexOf(task)
        part.tasks.splice(dropIndex+1, 0, currentTask)
        setParts(parts.map(b => {
            if (b.id === part.id) {
                return part
            }
            if (b.id === currentPart.id) {
                return currentPart
            }
            return b
        }))
    }

    function dropTaskHandler(e, part) {
        part.tasks.push(currentTask)
        const currentIndex = currentPart.tasks.indexOf(currentTask)
        currentPart.tasks.splice(currentIndex, 1)
        setParts(parts.map(b => {
            if (b.id === part.id) {
                return part
            }
            if (b.id === currentPart.id) {
                return currentPart
            }
            return b
        }))
    }

    function changeButton(e) {
        setDrag(!drag)
        drag ? e.target.style.backgroundColor = 'gray' : e.target.style.backgroundColor = 'green'
    }       

    // function deleteElem(e) {
    //     console.log(e.target.id)
    //     dispatch(deleteTask(e.target.id))
    // }

    return (
        <>
            {projectsStore.length === 0 || selectedProjectStore === undefined ?
                <div className={styles.title}>Выберите проект</div>
            :
                <div className={styles.container}>
                    <div className={styles.title}>Проект: {selectedProjectStore.name}
                        <div 
                            className={styles.modal__cross}
                            onClick={() => {dispatch(deleteProject(selectedProjectStore)); dispatch(deleteAllTasks(selectedProjectStore))}}>
                                X
                        </div>
                    </div>
                    <input
                        className={styles.input}
                        placeholder='Поиск'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className={styles.boardWrapper}>
                        <button className={styles.dragBtn} onClick={changeButton}
                            disabled={filterTasks.length<2}>
                                Drag'n'Drop Mode
                        </button>
                        {parts.map(part => {
                            return (
                                <div className={styles.board} key={part.id}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDrop={(e) => dropTaskHandler(e, part)}>
                                        {part.title}
                                            <ol className={styles.list}>
                                                {!drag ?
                                                    filterTasks.map(el => {
                                                        if (el.status === part.title) {
                                                            return (
                                                                <div key={el.id} className={styles.list}>
                                                                    <li 
                                                                        className="task"
                                                                        onClick={clickedTask}
                                                                        draggable={drag}>
                                                                            {el.title}
                                                                    </li>
                                                                    <div className={styles.modal__delBtn}
                                                                        onClick={(e) => dispatch(deleteTask(e.target.id))}
                                                                        id={el.id}>
                                                                            удалить
                                                                    </div>
                                                                </div>
                                                                
                                                            )
                                                        }
                                                    })
                                                :
                                                    part.tasks.map(task => {
                                                        return (
                                                            <li 
                                                                key={task.id}
                                                                className="task"
                                                                onClick={clickedTask}
                                                                onDragOver={(e) => dragOverHandler(e)}
                                                                onDragLeave={(e) => dragLeaveHandler(e)}
                                                                onDragStart={(e) => dragStartHandler(e, part, task)}
                                                                onDragEnd={(e) => dragEndHandler(e)}
                                                                onDrop={(e) => dropHandler(e, part, task)}
                                                                draggable={drag}>
                                                                    {task.title}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.list__addBtn}
                        onClick={() => setModalTask(true)}>{taskInfo ? 'Подробнее' : 'Добавить задачу'}
                    </div>
                    {modalTask && (
                        <ModalComp 
                            taskInfo={taskInfo}
                            setTaskInfo={setTaskInfo}
                        />
                    )}
                </div>
            }
        </>
        
    );
  }
  
  export default Tasks;