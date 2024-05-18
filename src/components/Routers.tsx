import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home/Home";
import Works from "../pages/works/Works";
import Contact from "../pages/contact/Contact";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} /> // page-not-found route

    </Routes>

  )
}

export default Router;