function TodoList(props){
    return (
      <ul style={{listStyleType:'none',padding:0}}>
        {props.children}
      </ul>
    );
  }
  export {TodoList};