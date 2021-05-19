import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
      title
    }
  }
`;

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setTitle(""),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { title } });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='my-4 flex rounded-md shadow-sm'>
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
  );
};

export default AddTodo;
