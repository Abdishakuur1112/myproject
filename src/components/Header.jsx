import { useState } from "react"
function Heder(){
  
    
  return <div>
    <div className="w-full h-[1000px] bg-yellow-400 ">
      <div className="flex justify-between  px-[50px] pt-8  ">
      <i class="fa-solid fa-bars text-5xl absolute right-6 sm:hidden "></i>
        <h1 className="text-4xl font-bold">Code Xalka</h1>
        <ul className="sm:flex hidden justify-evenly gap-28 mr-[300px] text-4xl">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      
    </div>
  </div>

}
  export default Heder