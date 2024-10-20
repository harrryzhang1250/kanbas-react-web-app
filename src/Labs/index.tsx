import Lab1 from "./Lab1";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import React from "react";
export default function Labs() {
  return (
    <div>
      <h1>Zinan Zhang - Section #1</h1>
      <TOC/>
      <Routes>
      <Route path="Lab1" element={<Lab1/>}/>
        <Route path="Lab2" element={<Lab2/>}/>
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
