import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListeToDo() {
    const { id } = useParams()
    const userListe = useSelector(state => state.user.data)
    const todoListe = useSelector(state => state.todoList.data)
    const selectedUser = userListe.users.filter(user => user.id == id)
    const selectedToDos = todoListe.todos.filter(todo => todo.id == id)
    return (
        <div>
            <h1 className='h1'>{`${(selectedUser[0].firstName)} ${(selectedUser[0].lastName)}`}</h1>
            <div className='todo'>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedToDos.map(todo => <tr key={todo.id}>
                            <td>
                                {todo.todo}
                            </td>
                            <td>
                                {todo.completed === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <span className='info'>

                    <a href="/">home</a>
                </span>
            </div>
        </div>
    )
}