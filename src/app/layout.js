"use client"; 
import React, { Suspense } from "react";
import "./_styles/globals.css";
import img from "../public/bg.jpg"

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col bg-primary-950 text-primary-100 min-h-screen gap-1">
        <main className="flex-grow">
          <div
            style={{
              backgroundImage: "url('/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              {children}  
            </Suspense>
          </div>
        </main>

        <footer className="bg-accent-500 flex justify-evenly p-4 font-semibold font-sans">
          <p>Designed and developed by @shivavar</p>
          <p>2025 Quiz competition &copy;</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
