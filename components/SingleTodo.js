import { gql, useMutation } from '@apollo/client'
import { TrashIcon } from '@heroicons/react/solid'

const DELETE_TODO = gql`
  mutation deleteTodo($id: uuid!) {
    delete_todos_by_pk(id: $id) {
      id
      title
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: uuid!, $completed: Boolean!) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
      completed
    }
  }
`;

const SingleTodo = ({ todo }) => {
  const [deleteTodoMutation] = useMutation(DELETE_TODO);
  const [toggleTodoMutation] = useMutation(TOGGLE_TODO);

  const deleteTodo = (e) => {
    e.preventDefault();
    deleteTodoMutation({ variables: { id: todo.id } });
  };

  const toggleTodo = (e) => {
    e.preventDefault();
    toggleTodoMutation({
      variables: { id: todo.id, completed: !todo.completed },
    });
  };

  return (
    <li key={todo.id} className='px-6 py-4 flex justify-between'>
      <div>
        <input
          id={todo.id}
          name='completed'
          type='checkbox'
          checked={todo.completed}
          onChange={toggleTodo}
          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mr-3'
        />
        <label
          htmlFor={todo.id}
          className={todo.completed ? "line-through text-gray-400" : ""}
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
