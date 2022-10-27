import React, { useRef, useState } from "react";
import Icon from "./Icon";
import classNames from "classnames";
import { Formik, Form } from "formik";

const Login = () => {
  const [focusInput, setFocusInput] = useState(true);
  const ref = useRef(null);

  const handleFocus = (e) => {
    if (e.currentTarget === e.target) {
      setFocusInput(!focusInput);
    }
    if (focusInput) {
      ref.current.focus();
    }
  };
  console.log(focusInput);

  const handleBlur = () => {
    setFocusInput(!focusInput);
    console.log("blur");
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
              <Formik>
                {() => (
                  <Form>
                    {" "}
                    <div
                      className={classNames({
                        "border border-gray-600 h-[56px] flex items-end relative group": true,
                        "border-[#1D9BF0]": !focusInput,
                      })}
                      onClick={handleFocus}
                    >
                      <p
                        className={classNames({
                          "absolute top-4 left-2 duration-200": true,
                          "-translate-y-3 text-xs text-[#1D9BF0]": !focusInput,
                        })}
                      >
                        email
                      </p>
                      {!focusInput && (
                        <p className="absolute top-1 right-2 text-sm">1 / 50</p>
                      )}

                      <div className="px-2 w-full">
                        <input
                          type="text"
                          className={classNames({
                            "bg-black h-5 p-2 w-full outline-none": true,
                          })}
                          ref={ref}
                          onFocus={() => setFocusInput(false)}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div
                      className={classNames({
                        "border border-gray-600 h-[56px] flex items-end relative group": true,
                        "border-[#1D9BF0]": !focusInput,
                      })}
                      onClick={handleFocus}
                    >
                      <p
                        className={classNames({
                          "absolute top-4 left-2 duration-200": true,
                          "-translate-y-3 text-xs text-[#1D9BF0]": !focusInput,
                        })}
                      >
                        Password
                      </p>
                      {!focusInput && (
                        <p className="absolute top-1 right-2 text-sm">1 / 50</p>
                      )}

                      <div className="px-2 w-full">
                        <input
                          type="text"
                          className={classNames({
                            "bg-black h-5 p-2 w-full outline-none": true,
                          })}
                          ref={ref}
                          onFocus={() => setFocusInput(false)}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
