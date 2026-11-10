
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './redux/components/Navbar'
import Home from './redux/components/Home'
import Paste from './redux/components/Paste'
import ViewPaste from "./redux/components/ViewPaste"
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
       <Navbar/>
       <Home/>
      </div>
    },
    {
       path:"/pastes",
      element:
      <div>
      <Navbar/>
        <Paste/>
      </div>
    },
    {
       path:"/pastes/:id",
      element:
      <div>
        <Navbar />
      <ViewPaste/>
      </div>
    },
    
  ]
)
function App() {
  
  return (
   <div>
   <RouterProvider router={router}/>
   </div>
  )
}

export default App
