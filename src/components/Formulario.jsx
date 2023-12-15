// Formulario.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Formulario = ({ addTodo, editTodo, editingTask, setIsEditing }) => {
  const initialTodoState = {
    title: '',
    description: '',
    state: 'pendiente',
    priority: false,
  };

  const [todo, setTodo] = useState(initialTodoState);

  useEffect(() => {
    // Si hay una tarea en proceso de edición, actualiza el estado del formulario
    if (editingTask) {
      setTodo(editingTask);
    } else {
      // Si no hay tarea en edición, resetea el formulario
      setTodo(initialTodoState);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.title.trim() === '' || todo.description.trim() === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo va mal...!',
      });
    }

    if (editingTask) {
      // Si hay una tarea en edición, realiza la actualización
      editTodo(todo);
      setIsEditing(false);
    } else {
      // Si no hay tarea en edición, agrega una nueva tarea
      addTodo({
        ...todo,
        id: Date.now(),
      });
      // Limpiar el formulario después de enviar o editar
      setTodo(initialTodoState);
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Introduce nombre de la tarea"
          type="text"
          className="form-control mb-2"
          value={todo.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Introduce la descripcion"
          className="form-control mb-2"
          value={todo.description}
          onChange={handleChange}
        />
        <select name="state" className="form-control mb-2" value={todo.state} onChange={handleChange}>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        {/* Añadimos el checkbox */}
        <div className="form-checked mb-2">
          <input
            className="form-checked-input"
            type="checkbox"
            name="priority"
            id="inputchecked"
            checked={todo.priority}
            onChange={handleChange}
          />
          <label htmlFor="inputchecked" className="form-checked-label">
            Prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          {editingTask ? 'Guardar cambios' : 'Añadir'}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
