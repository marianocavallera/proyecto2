function CreateTodoItemButton(){
    return (
        
        <div style={{textAlign:'center',display:'flex', justifyContent:'center',alignItems:'center',marginTop:"30px"}}>
            <button style={{textAlign:'center',boxShadow:'1rem 0.5rem 0.7rem black',padding:'10px',paddingLeft:"20px",paddingRight:"20px"}}
            onClick={(event)=> console.log('owo')}>Agregar Tarea</button>
        </div>
    );
  }
  export {CreateTodoItemButton};