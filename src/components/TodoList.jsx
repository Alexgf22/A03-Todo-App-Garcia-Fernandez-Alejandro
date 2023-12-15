import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const pendingTodos = todos.filter((todo) => todo.state === 'pendiente')
  const reversedTodos = todos.slice().reverse()

  return (
    <div className='mt-2'>
      <h1 className='text-center'>Lista de tareas</h1>
      <p className='text-center'>Tareas pendientes: {pendingTodos.length}</p>
      {todos.length === 0 ? (
        <p className='text-center'>No hay tareas por el momento.</p>
      ) : (
        <ul>
          {reversedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
