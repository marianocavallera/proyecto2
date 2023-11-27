import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { CreateTodoItemButton } from './CreateTodoItemButton';
import React from 'react';

const defaultTodos = [
  {text:'sacar turno dermatologa', completed: false},
  {text:'sacar turno quiropractico', completed: true},
  {text:'terminar desafio pasantia',completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>

      <TodoList>
          {defaultTodos.map(todo => 
          (<TodoItem key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}/>))}

      </TodoList>

     <CreateTodoItemButton />
     </React.Fragment>
  );
}

export default App;
