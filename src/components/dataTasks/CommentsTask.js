import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Comments from '../ModalComp/Comments'
import { addId } from '../../store/selectedCommentReducer'
import styles from '../ModalComp/ModalComp.module.css'

const CommentsTask = ({states, localDispatch, approveEdit}) => {
    const dispatch = useDispatch()

    function subComment(e) {
        const btn = e.target.id
        localDispatch({type: 'editingSubcomment'})
        localDispatch({type: 'editingComment'})
        dispatch(addId(btn))
    }

    return (
        <div className={styles.modal__title}>Комментарии: 
            {states.editingComment ? 
                <>
                    <input 
                        className={styles.modal__input}
                        onChange={(e) => localDispatch({type: 'newComment', payload: e.target.value})}>
                    </input>
                    <button id={states.editingSubcomment ? 'subcomment' : 'comment'} onClick={approveEdit}>V</button>
                    <button onClick={() => localDispatch({type: '!editingComment'})}>X</button>
                </>
            :
                <Comments 
                    localDispatch={localDispatch}
                    subComment={subComment}
                />
            }
        </div>
    )
}
export default CommentsTask