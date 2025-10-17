import React, { useContext, useState } from "react";
import { listContext } from "./Context/TaskContext";
import { toast } from "react-toastify";

const App = () => {

 const [Task,setTask]= useContext(listContext)
 const [Todo, setTodo] = useState("")
 const handleAdd=(e)=>{
  e.preventDefault();
  if (Todo.trim()==="") {
  toast.warn('Add task to proceed')
  return;
}

  setTask([...Task,Todo]);
  toast.success('Task added succesfully!')
  setTodo('');

 }
 const handleDelete=(idx)=>{
const copyTask=[...Task]
copyTask.splice(idx,1)
setTask(copyTask)
toast.error('Task Deleted!')
 }
let rendertask=<h2 className="text-xl ">No Task Available...</h2>

if (Task.length>0) {
  

rendertask=Task.map((item,idx)=>{
  return  <ul key={idx} className="flex justify-between items-center bg-slate-300 mb-2 p-3 rounded  ">
    <h1 className="text-lg font-semibold">{item}</h1>
    <button onClick={()=>{handleDelete(idx)}}
     className="bg-red-500 px-3 py-1 rounded font-semibold text-white ">
      Delete
    </button>

  </ul>

})
}



  return (
    <div className="min-h-screen w-full flex justify-center p-10 flex-col overflow-auto bg-gray-700">
      <h1 className="text-7xl text-center font-bold text-red-400 ">
        Todo List
      </h1>
      <form  onSubmit={handleAdd}
      className="flex flex-col items-center bg-gray-600 p-15 mt-5 rounded ">
        <input value={Todo}
        onChange={(e)=>{
          setTodo(e.target.value)
        }}
          className="bg-amber-200 rounded px-4 py-2 outline-none mb-5 w-full  "
          type="text"
          placeholder="Enter task.."
        />
        <button className="px-4 py-2 rounded bg-green-400 text-white mt-2 font-bold  hover:active:scale-95 ">
          Add Task
        </button>
      </form>
     <div className="mt-2 bg-slate-400 p-5 rounded overflow-y-auto
  min-h-[70px] max-h-80">
     {rendertask}
     </div>
    </div>
  );
};

export default App;
