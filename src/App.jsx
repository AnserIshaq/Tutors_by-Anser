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
import ContactUsScreen from './Screens/ContactUsScreen'
import FAQScreen from './Screens/FAQScreen'
import TutorSignupScreen from './Screens/TutorSignupScreen'
import Layout from './Layout/Layout'
import PricingScreen from './Screens/PricingScreen'
import CartScreen from './Screens/CartScreen'
import TutorDashboardScreen from './Screens/Dashboard/TutorDashboardScreen'
import StudentDashboardScreen from './Screens/Dashboard/StudentDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<LandingScreen />} />
            <Route path='/about-us' element={<AboutScreen />} />
            <Route path='/become-tutor' element={<BecomeTutorScreen />} />
            <Route path='/contact-us' element={<ContactUsScreen />} />
            <Route path='/faq' element={<FAQScreen />} />
            <Route path='/tutor-signup' element={<TutorSignupScreen />} />
            <Route path='/pricing' element={<PricingScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/tutor-dashboard' element={<TutorDashboardScreen />} />
            <Route path='/student-dashboard' element={<StudentDashboardScreen />} />
          </Route>

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
