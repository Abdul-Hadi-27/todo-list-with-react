import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import TaskContext from './Context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <TaskContext>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
  </TaskContext>
)
