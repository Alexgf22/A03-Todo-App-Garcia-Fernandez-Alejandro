// Todo.jsx
import React, { useState } from 'react';
import Formulario from './Formulario'; // Asegúrate de importar el componente Formulario correctamente

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, description, priority, state } = todo;
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  return (
    <li className={`list-group-item ${state === 'completada' ? 'completed' : ''}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          {isEditing ? (
            <Formulario editTodo={updateTodo} editingTask={todo} setIsEditing={setIsEditing} />
          ) : (
            <>
              <h5>{title}</h5>
              <p>{description}</p>
            </>
          )}
        </div>

        <div className="d-flex">
          <button onClick={() => deleteTodo(id)} className="btn btn-sm btn-danger mr-2">
            Eliminar
          </button>
          {isEditing ? (
            <button className="btn btn-sm btn-warning mr-2" disabled>
              Editar
            </button>
          ) : (
            <button onClick={handleUpdateClick} className="btn btn-sm btn-warning mr-2">
              Editar
            </button>
          )}
          <button onClick={() => updateTodo(id)} className="btn btn-sm btn-primary">
            {state === 'completada' ? 'Marcar como Pendiente' : 'Marcar como Completada'}
          </button>
        </div>
      </div>

      <span className={`badge badge-primary ${priority ? 'bg-danger' : ''}`}>
        {priority && 'Prioridad'}
      </span>
    </li>
  );
};

export default Todo;
