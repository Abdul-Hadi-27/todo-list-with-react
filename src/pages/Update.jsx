import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useContext, useState } from 'react'
import { listContext } from '../Context/TaskContext'

const Update = () => {
  const { Todo, setTodo } = useContext(listContext)
  const { id } = useParams()
  const navigate = useNavigate()

  // const value = Array.isArray(Todo) ? Todo.find((item) => item.id === id) : null
  const value =  Todo.find((item) => item.id === id) 
  const [Edit, setEdit] = useState(value ? value.title : '')

  const { handleSubmit } = useForm({
    defaultValues: { title: value ? value.title : '' },
  })

  const updateHandler = () => {
    if (!Edit.trim()) {
      toast.warn('Please enter something before saving!')
      return
    }

    if (!Array.isArray(Todo)) {
      toast.error('Task list is invalid or empty!')
      return
    }

    const updatedTasks = Todo.map((item) =>
      item.id === id ? { ...item, title: Edit } : item
    )

    setTodo(updatedTasks)
    toast.success('Task Edited Successfully!')
    navigate('/')
  }

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(updateHandler)}
        className='flex items-center mt-10 justify-center gap-10'
      >
        <input
          className='border-0 outline-0 mr-10'
          value={Edit}
          onChange={(e) => setEdit(e.target.value)}
          type='text'
          placeholder='Enter edited task...'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-3 py-1 rounded'
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Update
