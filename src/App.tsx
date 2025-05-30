import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/user/sign-in"
import SignUp from "./Pages/user/sign-up"
import Error from "./Pages/Error"
import InputForm from "./Pages/user/form.js"
import OTPLogin from "./Pages/user/OTPLogin.js"


const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/sign-in" element={<SignIn />}/>
      <Route  path="/sign-up" element={<SignUp />}/>
      <Route  path="/form" element={<InputForm />}/>
      <Route  path="/otp-login" element={<OTPLogin />}/>
      <Route  path="*" element={<Error />}/>
    </Routes>
  )
}

export default App
