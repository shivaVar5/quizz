"use client";

import { useEffect, useState } from "react";
import { supabase } from "../_components/data_services";

const Page = ({name, score})=>{
    const [leaderboard, setLeaderBoard] = useState([]);

    const fetchData = async ()=>{
        const {data, error} = await supabase
        .from("leaderboard")
        .select("*")
        .order("score", {ascending:false})
        .limit(10);

        if(error)
        {
            console.error("error while fetching", error);
        }
        else{
            console.log("results", data);
            setLeaderBoard(data);
        }
    }
    useEffect(()=>{
        fetchData();
    }, []);
  

    return(
        <div>
            <div className="flex flex-col items-center justify-center gap-5">
               <h2 className="font-bold mb-5 text-2xl mt-4">Result</h2> 

               <h2 className="font-bold text-2xl">Check Your Standing In The World.....</h2>

               <div className="flex justify-center items-center">
                  <ul className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-6">
                {leaderboard.map((player, index) => (
              <li
                      key={index} // Use `player.id` instead of index
                   className="grid grid-cols-2 items-center p-2 mb-2
                 bg-slate-600 text-white rounded-lg shadow-md gap-8"
    >
      <h2 className="font-bold text-md">{index + 1}. {player.name}</h2>
      <h2 className="text-right text-md font-semibold">{player.score} points</h2>
    </li>
  ))}
</ul>

               </div>
            </div>
            
        </div>
    )
}
export default Page;