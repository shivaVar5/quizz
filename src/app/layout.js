import React from "react";
import "./_styles/globals.css"


const RootLayout = ({children})=>{
    return(
        <html lang="en">
            <body className="flex flex-col bg-primary-950 text-primary-100 min-h-screen gap-1">
               
                <main className="flex-grow ">
                    <div  style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
              }}
               >
                   {children}  
                </div> 
                </main>
               
               <footer className="bg-gray-500 flex justify-evenly p-4 font-semibold font-sans">
                <p>Designed and developed by @shivavar</p>
                <p className="">2025 Quiz competetion copyright</p>
               </footer>
               

            </body>
        </html>
    )
}
export default RootLayout;