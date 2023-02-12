import React from "react";
import  FormData  from "./components/formData";
import Fetch from "./components/Fetch";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<FormData />} />
          <Route path="fetch" element={<Fetch/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
