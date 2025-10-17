import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}])
   
  settitle('')
  setdesc('')
  };
  const deleteHandler=(elem,idx)=>{
   
  let copyTask=[...mainTask]
  copyTask.splice(idx,1)
  setmainTask(copyTask)

    
  }

  let renderTask=<h2>No Task Available</h2>
if (mainTask.length>0) {
   renderTask= mainTask.map((t,idx)=>{
    return <li className="flex items-center justify-between mb-8 "  key={idx} >
      <div className="flex items-center justify-between mb-5 w-2/3 ">

      <h5 className="text-2xl font-medium">{t.title}</h5>
      <h6 className="text-lg font-medium">{t.desc}</h6>
    </div>
    <button onClick={deleteHandler}
     className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
    </li>
    
  })
}
  return (
    <>
      <h1
        className="bg-black text-white font-bold
    text-5xl p-5 text-center"
      >
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input value={title}
        onChange={(e)=>{
          settitle(e.target.value)

        }}
          type="text"
          placeholder="Enter title..."
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
        />
        <input value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
         
        }}
          type="text"
          placeholder="Enter description..."
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
        />
        <button className="bg-black text-white  px-4 py-3 text-2xl    font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>

    </>
  );
};

export default App;
