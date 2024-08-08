import React from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

function Root() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div className={`${darkMode ? "dark w-full h-full" : ""}`}>
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
          <div className="min-h-screen flex  px-[150px]">
            <div className="w-1/4 px-2 relative ">SideLeft</div>
            <div className="flex-1 border-x border-gray-200 h-[700vh]">
              <Outlet />
            </div>
            <div className="w-1/4 px-2">SideRight</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
