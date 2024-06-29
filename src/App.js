import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom"

import './App.css';
import LoginForm from './Pages/LoginForm.js'
import Layout from './Components/Layout';
import SignUpForm from './Pages/SignUpForm';
import AddClothes from './Pages/AddClothes.js';
import ViewClothes from './Pages/ViewClothes.js';
import ClothModel from "./Pages/ClothModel.js";

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <SignUpForm />,
        },
        // other pages....
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/cloth",
          element: <AddClothes />,
        },
        {
          path: "/clothes",
          element: <ViewClothes />,
        },
        {
          path: "/view",
          element: <ClothModel />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App