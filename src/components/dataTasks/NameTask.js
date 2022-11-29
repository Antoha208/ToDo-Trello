import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../ModalComp/ModalComp.module.css'

const NameTask = ({states, localDispatch, approveEdit}) => {
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Наименование:
            {states.editingTitle ? 
                <>
                    <input 
                        className={styles.modal__input}
                        onChange={(e) => localDispatch({type: 'newTitle', payload: e.target.value})}>
                    </input>
                    <button id='title' onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingTitle'})}>X</button>
                </>
            :
                <>
                    <span className={styles.modal__time}> {selectedTaskStore.title}</span>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingTitle'})}>
                            Изменить
                    </div>
                </>
            }
        </div> 
    )
}

export default NameTask