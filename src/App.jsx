import Navbar from './components/Navbar'
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact'
import Membership from './components/Membership'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Home/></>
    },
   {
      path: "/Membership",
      element: <> <Navbar/> <Membership/> </>
    },
    {
      path: "/Contact",
      element: <> <Navbar/> <Contact/> </>
    },
    {
      path: "/Store",
      element: <> <Navbar/> <Store/> </>
    }
  ]); 

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
