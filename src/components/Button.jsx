import React from "react";

const Button = ({ title, id, righticon, lefticon, containerClass }) => {
  return (
    <button
      id={id}
      type="button"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-white text-black ${containerClass}`}
    >
      {lefticon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase">
        <div>{title}</div>
      </span>
      {righticon}
    </button>
  );
};

export default Button;
