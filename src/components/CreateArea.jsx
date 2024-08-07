import React, { useState } from "react";

function CreateArea({onAdd}) {
  const [inp,setInp]=useState({
    title:"",
    content:"",
  })

  function handleChange(event){
   const {name,value} = event.target;
   
     setInp((prevValue)=>{
       return {
        ...prevValue,
        [name]:value
      }
   })
  }

  function handleClick(event){
      event.preventDefault();
      if(inp.title!=="" && inp.content!==""){
        onAdd(inp);
        setInp({
          title:"",
          content:"",
        })
      }else{
        alert("Input cannot be Empty!");
      }   
  }

  return (
    <div>
      <form>
        <input name="title" value={inp.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={inp.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
