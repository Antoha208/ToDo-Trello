import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../ModalComp/ModalComp.module.css'

const PriorityTask = ({approveEdit, states, localDispatch}) => {
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Приоритет:
            {states.editingPriority ? 
                <>
                    <input 
                        className={styles.modal__input}
                        onChange={(e) => localDispatch({type: 'newPriority', payload: e.target.value})}>
                    </input>
                    <button id='priority' onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingPriority'})}>X</button>
                </>
            :
                <>
                    <span className={styles.modal__time}> {selectedTaskStore.priority}</span>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingPriority'})}>
                            Изменить
                    </div>
                </>
            }
        </div> 
    )
}
export default PriorityTask