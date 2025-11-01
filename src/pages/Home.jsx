import { list } from 'postcss'
import React, { useContext, useState } from 'react'
import { listContext } from '../Context/TaskContext'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Home = () => {
 const {Task,setTask,Todo,setTodo}= useContext(listContext)


const navigate=useNavigate();
 const {register,handleSubmit,reset}=useForm();
  const  submitHandler=(data)=>{
data.id=nanoid();

if(!Task.trim()){
  toast.warn('Add task to proceed')
  return;
}
 setTodo([...Todo,{...data,title:Task}])
 console.log(data)
 toast.success('Task Added')
 setTask('')
 reset();
  }

 const deleteHandler = (id) => {
  const updatedTasks = Todo.filter((task) => task.id !== id)
  setTodo(updatedTasks)
  toast.error('Task Deleted Successfully')
}
let renderTask=<h2 className=' border-2  px-3 py-1 bg-slate-500 text-center  rounded text-xl mt-8 text-white'>No Task Available...</h2>
if(Todo.length>0){
 renderTask=Todo.map((item)=>{
 return  <ul key={item.id} className='flex justify-between items-center bg-gray-500 gap-x-4 px-4 py-2 my-2 rounded'>
        <li className='text-lg mr-4'>{item.title}</li>
        <Link className='px-6 py-1 bg-green-400 text-white  rounded'
        to={`/update/${item.id}`}>Edit </Link>
     <button
          onClick={() => deleteHandler(item.id)}
          className='bg-red-500 text-white px-3 py-1 rounded'
        >Delete</button>
  </ul>
 })

}

  return (
    <div className='flex justify-center items-center flex-col'>
       <form onSubmit={handleSubmit(submitHandler)}
        className='mt-10 flex gap-10 '>
        <input className='border-0 outline-0 mr-10'
         {...register('title')}
        value={Task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}
         type="text" 
        placeholder='Enter task..' />
         <button
          type='submit'
          className='bg-blue-500 text-white px-3 py-1 rounded'
        >Add Task</button>
        {/* <Link to={`/update/${id}`}
        className='px-3 py-1 bg-blue-500 text-white' >Edit Task</Link> */}
       </form>

       <div className='w-1/2 min-h-[20px] max-h-[80vh] mt-10 overflow-hidden '>
        {renderTask}
       </div>
    </div>
  )
}

export default Home