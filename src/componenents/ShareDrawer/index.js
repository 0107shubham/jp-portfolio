import React, { useState } from "react";
import { Drawer } from "@mui/material";
import ShareDrawerElement from "../ShareDrawerElement";
import { RxCross2 } from "react-icons/rx";

const drawerStyle = {
  margin: "0 auto",
  height: "80%",
  width: "100%",
  maxHeight: "590px",
  maxWidth: "550px",
  boxShadow: "none",
  borderRadius: "10px",
  overflowY: "auto", // Add horizontal scrolling
};

// Apply styles only for mobile devices using a media query
const responsiveDrawerStyle = {
  ...drawerStyle,
  "@media (max-width: 628px)": {
    minHeight: "100%",
  },
};

// const drawerStyle = {
//   margin: "0 auto",
//   height: "100%",
//   width: "100%",
//   maxHeight: "590px",
//   maxWidth: "550px",
//   boxShadow: "none",
//   borderRadius: "10px",
// };

const ShareDrawer = ({ setOpenShareDrawer, openShareDrawer }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleClose = () => {
    setOpenShareDrawer(false);
  };

  const handleCopyLink = () => {
    const linkToCopy = "https://student.wcard.me"; // Your link goes here
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setLinkCopied(true); // Set linkCopied state to true when link is copied
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <Drawer
      open={openShareDrawer}
      anchor="bottom"
      onClose={handleClose}
      PaperProps={{ sx: responsiveDrawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <div className="p-5">
        <div className="flex flex-row justify-between p-3">
          <h2 className="text-2xl mb-6 font-bold text-gray-800">Share</h2>
          <RxCross2
            className="   h-6 w-6 items-center justify-center rounded-full bg-gray-100 sm:h-8 sm:w-8"
            onClick={handleClose}
          />
        </div>
        <p className="mb-2 text-base text-gray-500">
          Copy Link and Share it with anyone.
        </p>
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="text"
            placeholder="Placeholder"
            className="relative w-full rounded border-0 bg-gray-100 px-3 py-3 pr-10 text-sm text-gray-700 shadow outline-none focus:outline-none focus:ring"
            value="https://student.wcard.me"
          />
          <button
            type="button"
            class="absolute right-0 z-10 h-full items-center justify-center rounded bg-transparent p-3 text-center text-base font-normal leading-snug text-blue-500 focus:outline-none"
            onClick={handleCopyLink}
          >
            Copy
          </button>
          {linkCopied && <p className="text-xs text-green-500">Link Copied</p>}
        </div>
        <ShareDrawerElement />
      </div>
    </Drawer>
  );
};

export default ShareDrawer;
