import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/user/sign-in"
import SignUp from "./Pages/user/sign-up"
import Error from "./Pages/Error"
import InputForm from "./Pages/user/form.js"
import OTPLogin from "./Pages/user/OTPLogin.js"
import Layout from "./Pages/Layout.js"


const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/form" element={<InputForm />} />
      <Route path="/otp-login" element={<OTPLogin />} />
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
