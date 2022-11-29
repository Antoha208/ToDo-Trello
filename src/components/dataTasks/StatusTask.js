import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../ModalComp/ModalComp.module.css'

const StatusTask = ({states, localDispatch}) => {
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Статус:
            {states.editingStatus ? 
                <div className={styles.modal__inputSelect}>
                    <select className={styles.modal__select} 
                        onChange={(e) => localDispatch({type: 'newStatus', payload: e.target.value})}>
                        <option value="Queue">Queue</option>
                        <option value="Development">Development</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            :
                <>
                    <span className={styles.modal__time}> {selectedTaskStore.status}</span>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingStatus'})}>
                            Изменить
                    </div>
                </>    
            }
        </div>  
    )
}
export default StatusTask