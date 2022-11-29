import React from 'react'
import { useLocation } from 'react-router-dom'
import { TASKS_ROUTE } from '../../utils/consts'
import TaskAdding from './TaskAdding'
import ProjectAdding from './ProjectAdding'

import styles from './ModalComp.module.css'
import ModalCompInfo from './ModalCompInfo'

const ModalComp = ({taskInfo, setTaskInfo}) => {
    const location = useLocation()
    const isTasks = location.pathname === TASKS_ROUTE

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                {isTasks ?
                    taskInfo ?
                        <ModalCompInfo 
                            setTaskInfo={setTaskInfo}
                        />
                    :
                        <TaskAdding />
                :
                    <ProjectAdding />
                }
            </div>
        </div>
    )
}

export default ModalComp