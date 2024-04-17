import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";

const drawerStyle = {
  margin: "0 auto",
  height: "50%",
  width: "100%",
  maxWidth: "610px",
  boxShadow: "none",
  borderRadius: "10px",
};

const SaveContactDrawer = ({ open, setOpen }) => {
  const [value, setValue] = useState("");
  const [borderColor, setBorderColor] = useState("#ccc");
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false); // Track drawer state

  useEffect(() => {
    // When the drawer opens, reset the error state
    if (open) {
      setError("");
      setBorderColor("#ccc");
    }
    setDrawerOpen(open);
  }, [open]);

  const handleBlur = () => {
    if (!value.trim()) {
      setError("Please enter a value.");
      setBorderColor("#ff0000"); // Change border color to red if input is empty
    } else {
      setError("");
      setBorderColor("#ccc"); // Reset border color if input is not empty
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      anchor="bottom"
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <div className="flex flex-col rounded m-5">
        <h2 className="text-typo-primary text-left text-2xl font-bold">
          Save Contact
        </h2>
        <p className="text-typo-secondary my-4 text-lg font-bold">
          Email Ram Kumar's card to yourself:
        </p>
        <div className="relative  my-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            style={{ borderColor: borderColor }}
            placeholder="Enter text"
            className="w-full h-[55.2px] p-2 py-2 border  border-red-400 rounded-md text-base placeholder-gray-400 focus:outline-none"
          />
          <div
            style={{ color: borderColor }}
            className="absolute left-[20px] top-[-20px] bg-white px-2"
          >
            Your email address
          </div>
          {drawerOpen && error && (
            <div
              style={{ color: borderColor }}
              className="absolute left-4 bottom-[-12px] bg-white px-2"
            >
              Please enter valid email address
            </div>
          )}
        </div>
        <button className="bg-purple-400 h-10 w-full p-2 mt-3 text-white text-center rounded  text-base font-bold">
          Send
        </button>
        <button className="bg-custom-silver h-10 w-full p-2 mt-3 text-white   text-center rounded  text-base  font-bold">
          Add To Contacts
        </button>
      </div>
    </Drawer>
  );
};

export default SaveContactDrawer;
