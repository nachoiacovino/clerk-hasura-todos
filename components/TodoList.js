import { gql, useQuery } from '@apollo/client'

import SingleTodo from '../components/SingleTodo'

const GET_TODOS = gql`
  query getTodos {
    todos(order_by: { created_at: desc }) {
      id
      title
      created_at
      completed
    }
  }
`;

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return "Loading...";

  if (error) return <div>{error}</div>;

  return (
    <div className='bg-white shadow overflow-hidden rounded-md'>
      <ul className='divide-y divide-gray-200'>
        {data?.todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
