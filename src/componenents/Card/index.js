import React, { useState } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import Contact from "../Contact";
import Social from "../Social";
import More from "../More";
import Education from "../Education";
import Experience from "../Experience";
import Footer from "../Footer";
import SaveContactDrawer from "../SaveConatactDrawer";
import { useTheme } from "../../Context";

const Card = () => {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  };
  return (
    <div className="mx-auto w-full max-w-3xl sm:px-6 sm:py-12">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl">
          <img
            src="https://wcardmedia.b-cdn.net/storage/wcard_photos/W3j2ZncnVK0cgqT0EjLY8J7smym8HO1H1z8kGWrz.png"
            className="rounded-t-2xl"
            alt="card background"
          />
        </div>
      </div>
      <div
        className={`sm:border-1 ${
          darkMode ? "bg-white" : "bg-black"
        }  relative flex flex-col justify-start break-words shadow-lg main-section-has-banner rounded-b-2xl`}
      >
        <div className="mb-4 flex items-start justify-between px-3 sm:px-6">
          <div className="-mt-6 sm:-mt-10 md:-mt-16 rounded-full bg-red-700 ring-white bg-white relative ring-4 h-28 w-28 sm:min-h-32 sm:min-w-32">
            <img
              src="https://wcardmedia.b-cdn.net/storage/wcard_photos/gAdcFJqwb0Z8eLe3CKRV1eOU4ylRKBvwDg95jbTT.png"
              className="rounded-full h-full w-full shadow"
              alt="profile"
            />
          </div>
          <div className="mt-3 flex flex-grow max-w-[70%] flex-wrap items-end justify-end gap-2 sm:mt-6">
            <button class="bg-custom-purple text-[17px] text-white rounded py-2 px-5 h-8 md:h-10">
              Back my campaign
            </button>

            <button class=" flex flex-row justify-center  text-[18px] items-center bg-custom-silver rounded py-2 px-5 h-8 md:h-10">
              <MdOutlineWhatsapp class="mr-1" />
              Whatsapp
            </button>
            <button
              onClick={() => {
                toggleDrawer();
              }}
              class=" flex flex-row justify-center  text-[16px] items-center bg-custom-silver rounded py-2 px-5 h-8 md:h-10"
            >
              <MdOutlineSaveAlt class="mr-1" />
              Save
            </button>
            <SaveContactDrawer setOpen={setOpen} open={open} />
          </div>
        </div>
        <div class="px-3 sm:px-6">
          <h1
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-[28px]   mb-1 break-words font-semibold"
          >
            Ram Kumar
          </h1>
          <p
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "#334155" : "white",
            }}
            class=" text-[20px]   mb-1"
          >
            MBA Graduate - IIM, Ahmedabad
          </p>
          <p
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "#334155" : "white",
            }}
            class="  text-[20px]  mb-2 "
          >
            Delhi
          </p>
        </div>

        <Contact />
        <Social />
        <More />
        <Education />
        <Experience />
        <Footer />
        <SaveContactDrawer />
      </div>
    </div>
  );
};

export default Card;
