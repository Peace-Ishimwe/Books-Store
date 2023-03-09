import React from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from "./pages/login";
import ErrorPage from "./pages/404";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App