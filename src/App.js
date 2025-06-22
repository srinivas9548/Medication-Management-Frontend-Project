import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App