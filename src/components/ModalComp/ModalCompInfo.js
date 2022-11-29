import React, {useContext, useReducer} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'


import styles from './ModalComp.module.css'
import localReducer from './localReducer.js'
import { ContextTasks } from '../../pages/TasksPage/contextTasks'
import { changeTitle, changeAttach, changeComment, changeDescription, changePriority, changeSubtask, changeSubcomment } from '../../store/selectedTaskReducer'
import { updateTask } from '../../store/tasksReducer'

import NameTask from '../dataTasks/NameTask'
import DescriptionTask from '../dataTasks/DescriptionTask'
import PriorityTask from '../dataTasks/PriorityTask'
import StatusTask from '../dataTasks/StatusTask'
import Subtasks from '../dataTasks/Subtasks'
import AttachsTask from '../dataTasks/AttachsTask'
import CommentsTask from '../dataTasks/CommentsTask'

const ModalCompInfo = ({setTaskInfo}) => {
    const dispatch = useDispatch()
    const { setModalTask } = useContext(ContextTasks)
    const selectedTaskStore = useSelector(state => state.selectedTask.selectedTask)
    const selectedCommentStore = useSelector(state => state.selectedComment.selectedComment)
    const [states, localDispatch] = useReducer(localReducer, {editingTitle: false, editingDescription: false, editingPriority: false, editingStatus: false, editingSubtask: false, editingAttachs: false, editingComment: false, editingSubcomment: false, newTitle: '', newDescription: '', newPriority: '', newStatus: '', newSubtask: '', newAttach: '', newComment: {id: Date.now(), text: '', response: false}, saveButton: ''})

    function approveEdit(e) {
        switch (e.target.id) {
            case 'title':
                if (states.newTitle !== '') {
                    dispatch(changeTitle(states.newTitle))
                    localDispatch({type: '!editingTitle'})
                } else {
                    alert('Поле не может быть пустым')
                }
                break;
            case 'description':
                if (states.newDescription.split('').length < 20) {
                    dispatch(changeDescription(states.newDescription))
                    localDispatch({type: '!editingDescription'})
                } else {
                    alert('Максимум 20 символов')
                }
                break;
            case 'priority':
                if (states.newPriority <= 5 && states.newPriority > 0) {
                    dispatch(changePriority(states.newPriority))
                    localDispatch({type: '!editingPriority'})
                } else {
                    alert('Приоритет выставляется цифрой от 1 до 5')
                }
                break;
            case 'subtask':
                if (states.newSubtask !== '' && !selectedTaskStore.subtasks.some(el => el === states.newSubtask)) {
                    dispatch(changeSubtask(states.newSubtask))
                    localDispatch({type: '!editingSubtask'})
                } else {
                    alert('Поле не может быть пустым')
                }
                break;
            case 'attach':
                if (!selectedTaskStore.subtasks.some(el => el === states.newAttach)) {
                    dispatch(changeAttach(states.newAttach))
                    localDispatch({type: '!editingAttachs'})
                } else {
                    alert('Максимум 2 вложения')
                }
                break;
            case 'comment':
                if (states.newComment.text.split('').length <= 20) {
                    dispatch(changeComment(states.newComment))
                    localDispatch({type: '!editingComment'})
                } else {
                    alert('Максимум 20 символов')
                }
                break;
            case 'subcomment':
                if (states.newComment.text.split('').length <= 20) {
                    const neededComment = selectedTaskStore.comments.find(el => el.id == selectedCommentStore.id)
                    dispatch(changeSubcomment(neededComment))
                    localDispatch({type: '!editingComment'})
                    localDispatch({type: '!editingsubComment'})
                } else {
                    alert('Максимум 20 символов')
                }
                break;
            default:
                break;
        }
    }

    function saveChanges() {
        dispatch(updateTask(selectedTaskStore))
        setModalTask(false)
        setTaskInfo(false)
    }

    return (
        <div className={styles.modal__task}>
            <div 
                className={styles.modal__cross}
                onClick={() => {setModalTask(false); setTaskInfo(false)}}>
                    X
            </div>
            <div>
                <div className={styles.modal__title}>Номер задачи: {selectedTaskStore.number}</div>
                    <NameTask 
                        localDispatch={localDispatch}
                        approveEdit={approveEdit}
                        states={states}
                    />
                    <DescriptionTask 
                        localDispatch={localDispatch}
                        approveEdit={approveEdit}
                        states={states}
                    />
                <div className={styles.modal__title}>Дата создания: <span className={styles.modal__time}>{moment(selectedTaskStore.createdAt).format("hh:mm DD.MM.YYYY")}</span></div>
                    <PriorityTask 
                        localDispatch={localDispatch}
                        approveEdit={approveEdit}
                        states={states}
                    />
                    <StatusTask 
                        localDispatch={localDispatch}
                        states={states}
                    />
                    <Subtasks 
                        localDispatch={localDispatch}
                        states={states}
                        approveEdit={approveEdit}
                    />
                    <AttachsTask 
                        localDispatch={localDispatch}
                        states={states}
                        approveEdit={approveEdit}
                    />
                    <CommentsTask 
                        localDispatch={localDispatch}
                        states={states}
                        approveEdit={approveEdit}
                    />
                    {!states.editingTitle && !states.editingDescription && !states.editingPriority && !states.editingSubtask && !states.editingStatus && !states.editingAttachs && !states.editingComment && (
                        <div className={styles.modal__saveBtn}
                            onClick={saveChanges}>Сохранить
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ModalCompInfo