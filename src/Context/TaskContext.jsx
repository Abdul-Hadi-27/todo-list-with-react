import React, { createContext, useState } from 'react'
 export const listContext=createContext()

const TaskContext = ({children}) => {
    const [Task, setTask]= useState([])
      const [Todo, setTodo] = useState([]) 
    
  return (
   <listContext.Provider  value={{Task,setTask,Todo,setTodo}}>
    {children}

   </listContext.Provider>
  )
}

export default TaskContext