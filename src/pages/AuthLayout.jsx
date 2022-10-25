import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Seperator from "../components/Seperator";

const AuthLayout = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <div className="h-screen  md:flex md:w-screen overflow-x-hidden">
      <div className="bg-[url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)] md:flex items-center justify-center bg-center bg-cover md:w-[1040px] w-full hidden md:block">
        <Icon name="twitter" width={380} height={380} />
      </div>
      <div className="bg-black h-full p-4 text-white md:w-[864px]">
        <div className="w-[720px] p-5">
          <Icon name="twitter" size={45} />
          <h1 className="text-[64px] font-bold w-[473px] h-[160px] leading-[80px] my-12">
            Şu anda olup bitenler
          </h1>
          <h2 className="text-[31px] font-bold mb-8">Twitter'a bugün katıl.</h2>
          <div className="flex flex-col gap-y-3">
            <Button>
              <div className="flex items-center gap-x-2 text-black text-sm justify-center">
                <Icon name="google" size={18} />
                Google ile kaydolun
              </div>
            </Button>
            <Button>
              <div className="flex items-center gap-x-2 text-black text-sm justify-center font-semibold">
                <Icon name="apple" size={18} />
                Apple ile kaydol
              </div>
            </Button>
          </div>
          <div>
            <Seperator />
            <button className="bg-[#1d9bf0] w-[300px] h-[40px] rounded-3xl flex items-center font-semibold px-4 hover:opacity-90 ease-in duration-200">
              <span className="truncate text-[15px]">
                {" "}
                Telefon numarası veya e-posta adresiyle kaydol
              </span>
            </button>
            <p className="w-[300px] text-[11px] text-[#71767b] mt-1">
              By signing up, you agree to the{" "}
              <a href="#" className="text-[#0e9bc9]">
                Terms of Service
              </a>{" "}
              and
              <a href="#" className="text-[#0e9bc9]">
                {" "}
                Privacy Policy
              </a>
              , including{" "}
              <a href="#" className="text-[#0e9bc9]">
                Cookie Use
              </a>
              .
            </p>
            <div>
              <p className="text-[17px] mt-[60px] mb-5 font-semibold">
                Zaten bir hesabın var mı?
              </p>
              <button className=" w-[300px] h-[40px] rounded-3xl flex items-center font-semibold px-4 justify-center border border-[#536471] text-[#1d9bf0] text-[15px] hover:bg-bgOpacity ease-in duration-100">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
