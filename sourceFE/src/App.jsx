import React from 'react'
import {Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Stories from './pages/stories/Stories'
import NotFound404 from './pages/error/NotFound404'
import HomeNavbar from './components/headers/HomeNavbar'
import HomeHeader from './components/headers/HomeHeader'
const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<HomeHeader/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/stories' element={<Stories/>}/>
      </Route>
      </>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App