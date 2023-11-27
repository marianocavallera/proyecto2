import './TodoItem.css';
function TodoItem(props){
    return (
      <div className='item'>
      <li>
          <span id='completar'className={`componente ${props.completed && `vCompletada`}`}> V </span>
          <p id='tarea' className={`componente ${props.completed && `completada`}`}>{props.text}</p>
          <span id='eliminar' className='componente' > X </span>
      </li>
      </div>
    );
  }
  export {TodoItem};