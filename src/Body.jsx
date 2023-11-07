import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import { useContext } from "react"
import NowPlayingMovieContext from "../utils/NowPlayingMovieContext"


const Body = () => {

const movies=useContext(NowPlayingMovieContext)
console.log(movies)
  const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    }
  ]) 


  return (
    <div>
      <RouterProvider router={router}>    
      </RouterProvider>
    
    </div>
    
  )
}





export default Body