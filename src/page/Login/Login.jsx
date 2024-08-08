import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/Background/themeSlice";
function Login() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={
          darkMode
            ? "dark"
            : "" +
              "bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen min-w-full"
        }
      >
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          Bật/Tắt Dark Mode ádadasd
        </button>
        {/* Các thành phần khác của ứng dụng */}
      </div>
    </>
  );
}

export default Login;
