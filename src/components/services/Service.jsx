import React from "react";

function Service() {
  return (
    <div className="container mx-auto p-6">
      <h1
        style={{ fontWeight: "bold" }}
        className="text-center p-10 mt-1 md:mt-4"
      >
        <span className="text-amber-500">Our</span> Services
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-center rounded-3xl justify-center  m-3">
        <div className="w-70 p-3 rounded-lg shadow-lg border-2 border-amber-400  overflow-hidden flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:border-orange-500">
          <img
            className="h-60 m mb-4"
            src="https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775235_1280.png"
            alt="AI Generated Image"
          />
          <h4 style={{ fontWeight: "bolder", color: "#e06309" }}>
            WEB DEVELOPMENT
          </h4>
          <p className="leading-relaxed flex-1  text-center text-base mt-1 text-gray-600">
            Our web development service offers customized solutions for
            responsive, user-friendly websites. We leverage the latest
            technologies to ensure your online presence is visually appealing
            and optimized for performance. Let us bring your vision to life!
          </p>
        </div>

        <div className=" border-2 border-amber-400 w-70 p-3  rounded-lg shadow-lg  overflow-hidden flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:border-orange-500">
          <img
            className="h-60 m mb-4"
            src="https://cdn.pixabay.com/photo/2024/01/24/21/41/woman-8530607_1280.png"
            alt="AI Generated Image"
          />
          <h4 style={{ fontWeight: "bolder", color: "#e06309" }}>
            Website Design Services
          </h4>
          <p className="leading-relaxed flex-1  text-center text-base mt-2 text-gray-600">
            Our company specializes in creating custom, visually appealing
            websites tailored to each client's unique needs. We prioritize user
            experience and responsive design, ensuring accessibility and
            functionality across all devices.
          </p>
        </div>
        <div className="border-2 border-amber-400  w-70 p-3  rounded-lg shadow-lg  overflow-hidden flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:border-orange-500">
          <img
            className="h-60 m mb-4"
            src="https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_640.png"
            alt="AI Generated Image"
          />
          <h4 style={{ fontWeight: "bolder", color: "#e06309" }}>
            Technical Support Services
          </h4>
          <p className="leading-relaxed flex-1  text-center text-base mt-2 text-gray-600">
            We provide technical support to keep our clients' websites running
            smoothly, handling maintenance. This lets
            clients focus on their business while we manage the technical
            details and offer training for effective website management.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Service;
