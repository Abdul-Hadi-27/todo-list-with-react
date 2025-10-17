import React, { createContext, useState } from 'react'
 export const listContext=createContext()

const TaskContext = ({children}) => {
    const [Task, setTask]= useState([])
    
  return (
   <listContext.Provider  value={[Task,setTask]}>
    {children}

   </listContext.Provider>
  )
}

export default TaskContext