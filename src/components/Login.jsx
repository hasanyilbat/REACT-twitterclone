import React, { useRef, useState } from "react";
import Icon from "./Icon";
import classNames from "classnames";
import { Formik, Form } from "formik";

const Login = () => {
  const inputEpostaRef = useRef(null);
  const inputPass  wordRef = useRef(null);
  const handleFocus = (e) => {
    console.log(e.target);
    inputEpostaRef.current.focus();
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
                <div className="flex flex-col gap-y-6">
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
                        ref={inputEpostaRef}
                      />
                    </div>
                  </div>
                  <div className="border border-gray-600 h-[56px] flex items-end relative group">
                    <p
                      className="absolute top-4 left-2 group-focus-within:-translate-y-3 
                    group-focus-within:text-xs
                  group-focus-within:text-[#1D9BF0]
                    group-focus-within:font-semibold
                    duration-200"
                    >
                      password
                    </p>
                    <div className="p-2 w-full">
                      <input
                        type="text"
                        className=" bg-black h-5 p-2 w-full outline-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-end text-[#1D9BF0] text-[15px] mt-3">
                  E-posta kullan
                </p>
                <button className="w-full rounded-2xl border h-[50px] bg-[#eff3f4] font-bold my-12">
                  Kayıt Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
