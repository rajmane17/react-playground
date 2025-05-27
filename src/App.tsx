import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/user/sign-in"
import SignUp from "./Pages/user/sign-up"
import Error from "./Pages/Error"


const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/sign-in" element={<SignIn />}/>
      <Route  path="/sign-up" element={<SignUp />}/>
      <Route  path="*" element={<Error />}/>
    </Routes>
  ) // 404 => #343a40 and Oops! Page not found => #6c757d
}

export default App
