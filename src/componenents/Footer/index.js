import React, { useState } from "react";

import { TbSunFilled } from "react-icons/tb";

import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import SaveContactDrawer from "../SaveConatactDrawer";
import ShareDrawer from "../ShareDrawer";
import { useTheme } from "../../Context";
const Footer = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [openShareDrawer, setOpenShareDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };

  const toggleShareDrawer = () => {
    setOpenShareDrawer(true);
  };
  return (
    <div class="bg-footer-color flex items-center justify-between space-x-2 px-2 py-2 mt-8 mb-10 sm:px-6">
      <div class="">
        <button
          onClick={() => {
            toggleShareDrawer();
          }}
          style={{
            backgroundColor: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white",
          }}
          class={`share-button  text-typo-secondary flex h-10 items-center justify-center truncate rounded-full py-3 px-4 text-base outline-none focus:outline-none`}
        >
          <IoShareSocialOutline />
          Send
        </button>
        <ShareDrawer
          setOpenShareDrawer={setOpenShareDrawer}
          openShareDrawer={openShareDrawer}
        />
      </div>
      <div class="flex-grow">
        <div class="flex-grow">
          <button
            onClick={() => {
              toggleDrawer();
            }}
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="save-contact  text-typo-secondary flex h-10 items-center justify-center truncate rounded-full py-3 px-4 text-base outline-none focus:outline-none "
          >
            <MdOutlineSaveAlt />
            Save Contact
          </button>
          <SaveContactDrawer setOpen={setOpen} open={open} />
        </div>
      </div>
      <button
        type="button"
        class="gaclick bg-accent flex h-10 w-10 items-center justify-center rounded-full p-1 font-normal uppercase outline-none transition-all duration-150 ease-linear  focus:outline-none "
        data-action="light"
        data-category="dark_light_click"
      >
        <div
          class={`text-typo-primary ${
            darkMode ? "bg-white" : "bg-black"
          } flex items-center justify-center rounded-full p-1`}
        >
          {darkMode ? (
            <IoIosMoon onClick={toggleTheme} />
          ) : (
            <TbSunFilled onClick={toggleTheme} className="text-white" />
          )}
        </div>
      </button>
    </div>
  );
};

export default Footer;
