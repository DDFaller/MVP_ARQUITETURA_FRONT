
import './App.css';
import LoginForm from './Pages/LoginForm.js'
import SignUpForm from './Pages/SignUpForm';
import Layout from './Components/Layout';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom"

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
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App