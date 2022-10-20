import React from "react";

const Button = (props) => {
  return (
    <button className="w-[300px] h-[40px] bg-white rounded-3xl">
      {props.children}
    </button>
  );
};

export default Button;
