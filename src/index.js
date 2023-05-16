import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Routes>
      <Route path="*" element={<App /> }  />
    </Routes>
  </Router>
)
