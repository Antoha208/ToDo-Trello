import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import {deleteAttach} from '../../store/selectedTaskReducer'
import styles from '../ModalComp/ModalComp.module.css'

const AttachTask = ({states, localDispatch, approveEdit}) => {
    const dispatch = useDispatch()
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <div className={styles.modal__title}>Вложения:
            {states.editingAttachs ? 
                <>
                    <input 
                        accept="image/*"
                        className={styles.modal__inputAttach} 
                        type="file"
                        onChange = {(e) => localDispatch({type: 'newAttachs', payload: e.target.value})} 
                    />
                    <button id='attach' onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingAttachs'})}>X</button>
                </>
            :
                <>
                    <ol className={styles.list}>
                        {selectedTaskStore.attachs.map(el => {
                            return (
                                <li 
                                    key={el}
                                    id={el}
                                    onClick={(e) => dispatch(deleteAttach(e.target.id))}>
                                        {el}
                                </li>
                            )            
                        })}
                    </ol>
                    <div className={styles.modal__text}
                        onClick={() => localDispatch({type: 'editingAttachs'})}>
                            Добавить
                    </div>
                </>
            }
        </div>
    )
}
export default AttachTask