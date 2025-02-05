import React from "react";

function About() {
  return (
    <div className="conainer mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <div className="w-full md:w-1/2 ">
          <img
            className="pb-3 md:pb-0 w-full md:h-150 rounded-lg  shadow-amber-200 shadow-2xl"
            src="./images/aboutpic.jpg"
            alt=""
          />
        </div>
        <div className=" w-full md:w-1/2  text-center md:text-left border-1 border-amber-500  md:border-0 md:border-amber-50 shadow-xl rounded-3xl p-3 md:p-8 shadow-amber-100">
          <h2 className="">
            ABOUT
            <span className="text-amber-600 font-bold p-2 flex-1 leading-re">
              US
            </span>
          </h2>
          <p className="leading- md:text-[20px] font-medium text-gray-800">
            At WEB-DEV, we are a passionate startup dedicated to transforming
            ideas into stunning digital experiences. Our innovative team
            collaborates closely with clients to create visually captivating and
            user-friendly websites that reflect their brand and drive
            engagement. We believe in the power of creativity and technology,
            delivering tailored solutions to meet each business's unique needs.
            As a fresh player in the web design industry, we are committed to
            pushing boundaries and helping our clients stand out in the digital
            landscape. Join us on this exciting journey to shape the future of
            web design!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
