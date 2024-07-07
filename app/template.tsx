"use client";

import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  
    
  return (
    <>
 
      <Toaster
          toastOptions={{
            position:'top-center',
            duration:5000,

            className:
              "!px-3 !py-2 border [&>*]:font-medium [&>div:last-child]:text-sm border-solid dark:text-white dark:border-white dark:bg-dark-890 ",
          }}
        />
       
       {children}

    </>
  );
}
