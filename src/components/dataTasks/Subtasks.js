import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import {deleteSubtask} from '../../store/selectedTaskReducer'
import styles from '../ModalComp/ModalComp.module.css'

const Subtasks = ({states, localDispatch, approveEdit}) => {
    const dispatch = useDispatch()
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Подзадачи:
            {states.editingSubtask ? 
                <>
                    <input 
                        className={styles.modal__input}
                        onChange={(e) => localDispatch({type: 'newSubtask', payload: e.target.value})}>
                    </input>
                    <button id='subtask' onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingSubtask'})}>X</button>
                </>
            :
                <>
                    <ol className={styles.list}>
                        {selectedTaskStore.subtasks.map(el => {
                            return (
                                <li 
                                    key={el}
                                    className="task"
                                    id={el}
                                    onClick={(e) => dispatch(deleteSubtask(e.target.id))}>
                                        {el}
                                </li>
                            )            
                        })}
                    </ol>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingSubtask'})}>
                            Добавить
                    </div>
                </>
            }
        </div>
    )
}
export default Subtasks