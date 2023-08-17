import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router'
import AuthProvider from './Authentication/AuthProvider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      {/* this is for gap all right and left side gap */}
      {/* <div className='w-11/12 mx-auto'> */}

      <RouterProvider router={router}></RouterProvider>

      {/* </div> */}

    </AuthProvider>

  </React.StrictMode>,
)
