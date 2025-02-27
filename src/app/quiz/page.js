"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../_components/data_services";
import {jsonData}  from "../_components/data";
import { useRouter, useSearchParams } from "next/navigation";



const Page =()=>{
const [questions, setQuestions] = useState(jsonData);
const [currentIndex, setCurrentIndex] = useState(0);
const [selectedOption, setSelectedOption] = useState(null);
const [timer, setTimer] = useState(20);
const [score, setScore] = useState(0);
const[loading , setLoading] = useState(false);


const searchParams = useSearchParams();
const name = searchParams.get("name");
const router = useRouter();

useEffect(()=>{

    if(timer === 0)
    {
        moveTonextQuestion();
        return;
    }
    const countdown = setInterval(()=>{
        setTimer((prevTime)=>prevTime - 1);
    }, 1000)

return () => clearInterval(countdown);

}, [timer, currentIndex]);




const handleClick = (option)=>{

   
    
    setSelectedOption(option);
    console.log("Selected Option:", option, "Correct Answer:", questions[currentIndex].answer);
    
    if (option === questions[currentIndex].answer )
    {
       
        if(timer <= 20 && timer > 15)
            {
                setScore((prev)=> prev + 20);
            }
        else if(timer <= 15 && timer > 10)
            {
                setScore((prev)=> prev + 10);
            }
         else if(timer <=10 && timer > 5){
            setScore((prev)=> prev +7);

         }   
         else{
            setScore((prev)=>prev+ 3);
         }
         setTimeout(()=>moveTonextQuestion(), 1000);
       
     
       
    }
    else{
        setTimeout(()=>moveTonextQuestion(), 1000);
      
    }
  

}

useEffect(() => {
   // console.log("Updated selectedOption:", selectedOption);
 

  }, [selectedOption]); // Runs whenever selectedOption changes
  


const saveResult = async ()=>{
    setLoading(true);
    const {data, error} = await supabase.
    from("leaderboard").insert([{
        name ,
        score


    },]);
    if(error){
        console.error("Error while sending to the database", error);
    }
    else{
        console.log("Rsults saved");
    }
    setLoading(false);
}

// 

const moveTonextQuestion =()=>{
    if(currentIndex + 1 < questions.length)
    {
        setCurrentIndex(currentIndex + 1);
        setTimer(20);
        setSelectedOption(null);
    }
    else{
        router.push("/result");
        saveResult();
    }
}
 
    return(
    <div >
        <div className="flex flex-col items-center justify-center flex-grow gap-8 mb-5">
            <h1 className=" p-3 font-light "> There are 16 questions with a 20-sec timer. The faster you answer, the higher your score.</h1>
            <div className="bg-accent-600 shadow-lg w-full max-w-3xl text-center rounded-2xl p-4">
                   
            
                 <h1 className="font-bold text-xl text-gray-800">
                 { currentIndex + 1}. { questions[currentIndex].question}
                        
                  </h1>
                    
                  

               
            </div>
            <div className="w-full grid grid-cols-1 max-w-md gap-6">
  {questions[currentIndex].options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleClick(option)}
      className={`w-full bg-slate-100 text-gray-800 font-normal p-2 rounded-2xl transition-all duration-300
        ${
          selectedOption === option
            ? option === questions[currentIndex].answer
              ? ("bg-green-600 text-green" )// ✅ Correct Answer (Green)
              : ("bg-red-600 text-red" )// ❌ Wrong Answer (Red)
            : "hover:bg-gray-300"
        }`}
    >
      <span className="font-bold mr-8">{String.fromCharCode(65 + index)}.</span>
      {option}
    </button>
    
  ))}
  

</div>

        <div className="flex justify-between items-center gap-8 p-2 font-semibold">
           
            <h2>{`${currentIndex + 1 }/${questions.length}`}</h2>
            <h2 className ="">Time Left :{timer}</h2>
            <h2> Score: {score}</h2>
        </div>

        <button className="bg-accent-600 px-7 py-2 rounded-xl font-black
         hover:bg-accent-400" onClick={()=>moveTonextQuestion()}>
            Next
        </button>
        </div>
       

    </div>
    )
}

export default Page;