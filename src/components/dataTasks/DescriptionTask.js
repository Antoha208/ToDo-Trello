import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../ModalComp/ModalComp.module.css'

const DescriptionTask = ({states, localDispatch, approveEdit}) => {
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Описание:
            {states.editingDescription ? 
                <>
                    <input 
                        className={styles.modal__input}
                        onChange={(e) => localDispatch({type: 'newDescription', payload: e.target.value})}>
                    </input>
                    <button id='description' onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingDescription'})}>X</button>
                </>
            :
                <>
                    <span className={styles.modal__time}> {selectedTaskStore.description}</span>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingDescription'})}>
                            Добавить
                    </div>
                </>
            }
        </div>
    )
}

export default DescriptionTask