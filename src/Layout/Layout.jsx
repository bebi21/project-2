import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Outlet /> {/* Đây là nơi các route con sẽ được render */}
    </div>
  );
};

export default Layout;
