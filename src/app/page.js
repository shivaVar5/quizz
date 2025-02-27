"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = ()=>{
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


 

  const handleChange = (e)=>{
    e.preventDefault();
    if (!name.trim()) {
      setName("Guest");
    }
    setName(e.target.value)
   

    // const nameRegex = /^[A-Za-z]{4,}$/; 
    // if(!nameRegex.test(name))
    // {
    //   setError("Name must be at least 4 letters and contain only alphabets.");
    // }
    // else{
    //   setError(`Welcome ${name} to quiz competetion`);
    // }


  }
  const handleClick = ()=>{
   
   
    const finalName = name.trim() || "Guest";  // Default to "Guest" if empty
  router.push(`/quiz?name=${encodeURIComponent(finalName)}`);
  };



  return(
    <div className="flex flex-col items-center   p-10 sm:p-10">
      <h1 className="mb-16 text-3xl font-bold">Welcome To Quiz Competetion!</h1>
      <h2 className="mb-16 text-xl text-gray-200"> challenging your reading and quick decision skills! </h2>

      <div className="flex flex-col justify-center gap-5">
      
        <input placeholder="Enter your name"
        className="text-center rounded-3xl 
         text-black font-semibold mb-10 shadow-md p-1 "
         value={name}
         onChange={handleChange}
      
        />
        
        <button className={`bg-accent-700
         px-20 py-3 text-3xl text-primary-50 rounded-3xl
          hover:bg-accent-600 font-semibold`

         }
         onClick={handleClick}
         >
          Start Quiz
        </button>
        
     
       
      
      </div>

    </div>
  )
}
export default Page;