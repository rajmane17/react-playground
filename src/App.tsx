import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/user/sign-in"
import SignUp from "./Pages/user/sign-up"


const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/sign-in" element={<SignIn />}/>
      <Route  path="/sign-up" element={<SignUp />}/>
    </Routes>
  )
}

export default App
