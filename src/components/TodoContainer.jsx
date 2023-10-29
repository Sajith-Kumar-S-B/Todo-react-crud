import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function TodoContainer() {
  
  const[newTodo,setNewTodo] = useState(()=>{
    const savedTodos = localStorage.getItem("newTodo");
    // if there are todos stored
    if (savedTodos) {
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  })
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);


  useEffect(()=>{

    localStorage.setItem("newTodo",JSON.stringify(newTodo))

  },[newTodo])


  const handleAddTodo = () => {
    if (input.trim() !== '') {
      if (editIndex !== null) {
        // Edit existing task
        const updatedTodos = [...newTodo];
        updatedTodos[editIndex].text = input;
        setNewTodo(updatedTodos);
        setEditIndex(null);
      } else {
        // Add a new task
        setNewTodo((prevTodos) => [
          ...prevTodos,
          {
            id: prevTodos.length + 1,
            text: input.trim(),
            checked: false,
          },
        ]);
      }
      setInput('');
    } else {
     toast.info("Please Enter Task")
    }
  };


   const onInputChange = (e)=>{
    setInput(e.target.value)
    
   }


   const toggleTaskStatus = (id) => {
    setNewTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo

      )
      
    );

   
   
  };
 

  



  const deleteTask = (id) => {
    setNewTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  const editTask = (index) => {
    setEditIndex(index);
    setInput(newTodo[index].text);
  };



  return (
    <div className='wholediv sm:w-[500px] w-[100%] h-auto m-[2rem_auto] bg-gradient-to-r from-[#f0e9f0] to-[#e9e5f1] sm:p-[3em_2.5em] p-[3em_1em]'>

      <div className="grid grid-cols-[85%_15%] gap-1  mx-auto">
      <input onChange={onInputChange} className='text-area' name='input' type="text" placeholder="Tasks to be done.." value={input}/>
      <button type="submit" onClick={handleAddTodo} className="bg-[#9a9fcf] text-[16px] rounded text-white">
          {editIndex !== null ? 'Update' :  <i className="fa-solid fa-plus "></i>}
        </button>
        </div>

       {newTodo.map((todo,index)=>(<div className='list-items'  >
        <input type="checkbox" className="checkbox" checked={todo.checked}
            onChange={() => toggleTaskStatus(todo.id)} />
            
            {editIndex === index ? (
            <span>{todo.text}</span>
          ) : (
            <span>{todo.text}</span>
          )}
         
               
               {editIndex === index ? (<button onClick={handleAddTodo} className="edit text-[#898fcd]" >
                    <i className="fa-solid fa-save"></i>
                </button>):(<button onClick={() => editTask(index)} className="edit text-[#898fcd]" >
                    <i className="fa-solid fa-pen-to-square "></i>
                </button>)}
                <button className="delete text-[#898fcd]" onClick={() => deleteTask(todo.id)} > 
                    <i className="fa-solid fa-trash"></i>
                </button>
        </div>)) }

    </div>
  )
}

export default TodoContainer