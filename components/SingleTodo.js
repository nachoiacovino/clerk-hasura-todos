import { TrashIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const SingleTodo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const deleteTodo = () => {};

  return (
    <li key={todo.id} className='px-6 py-4 flex justify-between'>
      <div>
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
      </div>
      <TrashIcon
        className='h-5 w-5 text-gray-500 cursor-pointer'
        onClick={deleteTodo}
      />
    </li>
  );
};

export default SingleTodo;
