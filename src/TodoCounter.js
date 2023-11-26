import './TodoCounter.css';
function TodoCounter({total,completed}){
    return(
      <div id='divTitulo'>
      <h1>Has completado {completed} de {total} tareas</h1>
      </div>
    );
  }

  export {TodoCounter};