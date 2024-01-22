/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage/Homepage";
import React from 'react'

const App = () => {
  return (
    <div>
       <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App