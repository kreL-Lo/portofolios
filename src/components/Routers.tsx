import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home/Home";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>

  )
}

export default Router;