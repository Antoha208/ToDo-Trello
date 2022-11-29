import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ModalComp.module.css'

const Comments = ({subComment, localDispatch, obj}) => {
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)

    return (
        <>
            <ol className={styles.list}>
                {selectedTaskStore.comments.map(el => {
                    return (
                        <div key={el.id}>
                            <div  className={styles.list}>
                                <li>
                                        {el.text}
                                    <div className={styles.modal__repBtn}
                                        onClick={subComment}
                                        id={el.id}>
                                            ответить
                                    </div>
                                </li>
                            </div>
                            <div className={styles.list}>
                                {el.response !== false && (
                                    <ol className={styles.list}>
                                        <li>
                                            {el.response.text}
                                            <div className={styles.modal__repBtn}
                                                onClick={subComment}
                                                id={el.id}>
                                                    ответить
                                            </div>
                                        </li>
                                    </ol>
                                )}
                                {/* {Object.keys(el.response).length != 0 ? <Comments obj={el.response} /> : null} */}
                            </div>
                        </div>
                    )            
                })}
            </ol>
            <div className={styles.modal__text}
                onClick={() => localDispatch({type: 'editingComment'})}>
                    Добавить
            </div>
        </>
    )
}

export default Comments