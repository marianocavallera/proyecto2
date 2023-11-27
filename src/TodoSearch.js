import React, { useState } from "react";

function TodoSearch(){
    const [searchValue, setSearchValue]=React.useState();
    useState('');
    console.log('los usuarios intentan buscar '+ searchValue);
    return (
        <div style={{textAlign:'center',}}>
            <input placeholder='Buscar tarea'
            value={searchValue}
            onChange={(event)=>{setSearchValue(event.target.value)}}   
            style={{textAlign:'center',boxShadow:'1rem 1rem 1rem black',padding:10,paddingLeft:20,paddingRight:20}}/>
        </div>
        
    );
  }

  export {TodoSearch};