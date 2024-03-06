import React from "react";
import { createRoot } from "react-dom/client";
import "./styl.css"
const root = document.getElementById("root")
import Heder from "./components/Header";
import Show from "./components/Show";
import Fotear from "./components/Fotear";
import Herow from "./components/Hero";
createRoot(root).render(
  <div>
   <Heder />
   <Show />
   <Herow />
  <Fotear />
  
  </div>
  
)

