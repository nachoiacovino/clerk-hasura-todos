import { useState } from 'react'

import SingleTodo from '../components/SingleTodo'

const todos = () => {
  const [title, setTitle] = useState("");
  const todos = [
    { title: "hello", id: "1", completed: false },
    { title: "hello 2", id: "2", completed: false },
    { title: "hello 3", id: "3", completed: true },
  ];

  const onSubmit = () => {};

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-32'>
      <div className='max-w-3xl mx-auto lg:w-4/12'>
        <h1 className='text-3xl font-bold '>My todos!</h1>

        <form onSubmit={onSubmit}>
          <div className='mt-4 flex rounded-md shadow-sm'>
            <div className='relative flex items-stretch flex-grow focus-within:z-10'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'></div>
              <input
                type='text'
                name='title'
                id='title'
                className='focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
              Add
            </button>
          </div>
        </form>

        <div className='bg-white shadow overflow-hidden rounded-md mt-3'>
          <ul className='divide-y divide-gray-200'>
            {todos.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default todos;
