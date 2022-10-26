import React, { useRef, useState } from "react";
import Icon from "./Icon";

const Login = () => {
  const [focusInput, setFocusInput] = useState(true);
  const ref = useRef(null);

  const handleFocus = (e) => {
    if (e.currentTarget === e.target) {
      setFocusInput(!focusInput);
      console.log(focusInput);
    }
    if (focusInput) {
      ref.current.focus();
    }
  };

  return (
    <div className="relative z-10 text-[#e7e9ea]">
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
        id="container"
      >
        <div>
          <div className="absolute top-0 right-0 p-4"></div>
          <div className="h-[53px] bg-black flex items-center font-semibold text-base rounded-t-2xl">
            <div className=" pl-6">
              <button className="flex items-center justify-start w-[56px]">
                <Icon name="exit" size={20} />
              </button>
            </div>
            <div>
              <p className="text-[20px] font-bold">Adım 1/1</p>
            </div>
          </div>
          <div className="min-h-[200px] h-[600px]  w-[648px] bg-black flex flex-col items-center justify-center gap-y-4 rounded-b-2xl ">
            <div className="w-[438px] text-[#4a4e51]">
              <p className="text-white text-[31px] font-bold mb-12">
                Hesabını Oluştur
              </p>
              <form action="">
                <div
                  className="border border-gray-600 h-[56px] flex items-end relative group"
                  onClick={handleFocus}
                >
                  <p
                    className="absolute top-4 left-2 group-focus-within:-translate-y-3 
                    group-focus-within:text-xs
                  group-focus-within:text-[#1D9BF0]
                    group-focus-within:font-semibold
                    duration-200"
                  >
                    email
                  </p>
                  <div className="p-2 w-full">
                    <input
                      type="text"
                      className=" bg-black h-5 p-2 w-full outline-none"
                      ref={ref}
                      onFocus={() => setFocusInput(false)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
