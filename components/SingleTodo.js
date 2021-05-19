import { useState } from 'react'

const SingleTodo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <li key={todo.id} className='px-6 py-4'>
      <input
        id={todo.id}
        name='completed'
        type='checkbox'
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mr-3'
      />
      <label
        htmlFor={todo.id}
        className={completed ? "line-through text-gray-400" : ""}
      >
        {todo.title}
      </label>
    </li>
  );
};

export default SingleTodo;
