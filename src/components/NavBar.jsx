import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Certificates, Projects, More, Contact, Layout } from "./index";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/more" element={<More />} />
            <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
