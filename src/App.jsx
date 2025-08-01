// import './App.css'
import FotgotScreen from './Screens/FotgotScreen'
import LoginScreen from './Screens/LoginScreen'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignupScreen from './Screens/SignupScreen_1'
import './index.css'
import VerifyOtpScreen from './Screens/VerifyOtpScreen'
import EmailVerifyScreen from './Screens/EmailVerifyScreen'
import LandingScreen from './Screens/LandingScreen'
import AboutScreen from './Screens/AboutScreen'
import BecomeTutorScreen from './Screens/BecomeTutorScreen'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/about-us' element={<AboutScreen />} />
          <Route path='/become-tutor' element={<BecomeTutorScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/forgot-password' element={<FotgotScreen />} />
          <Route path='/signup-step-1' element={<SignupScreen />} />
          <Route path='/verify-otp' element={<VerifyOtpScreen />} />
          <Route path='/verify-email' element={<EmailVerifyScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
