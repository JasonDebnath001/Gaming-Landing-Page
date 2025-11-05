import React from "react";
import Button from "./Button";

const ImgClipBlocx = ({ src, clipClassName }) => {
  return (
    <div className={clipClassName}>
      <img src={src} alt="Contact" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImgClipBlocx
            clipClassName={"contact-clip-path-1"}
            src={"/img/contact-1.png"}
          />
        </div>
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-0 lg:w-96">
          <ImgClipBlocx
            clipClassName={
              "contact-clip-path-2 lg:translate-y-40 translate-y-60"
            }
            src={"/img/contact-2.png"}
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImgClipBlocx
            clipClassName={"absolute md:scale-125"}
            src={"/img/swordman.png"}
          />
          <ImgClipBlocx
            clipClassName={"sword-man-clip-path md:scale-125"}
            src={"/img/swordman.png"}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] uppercase text-white">Let's Connect</p>
          <p className="mt-10 w-full text-5xl leading-[0.9] md:text-[6rem] text-white">
            Have a question, <br /> or just <br /> want to say hi?
          </p>

          <Button
            title={"Contact Us"}
            containerClass={"mt-10 cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
