import React from "react";
import { useTheme } from "../../Context";
import "./index.css";
const Experience = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div>
      <h4
        style={{
          backgroundColor: darkMode ? "white" : "black",
          color: darkMode ? "black" : "white",
        }}
        class="text-typo-primary mb-3 text-lg font-medium"
      >
        Work Experience
      </h4>

      <div className="element-box">
        <div className="circle"></div>
        <div class="">
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-primary ml-4 flex-1 text-base font-medium"
          >
            Internship
          </div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-secondary ml-4 text-sm leading-6"
          >
            Microsoft
            <br />
            Feb 2018 - 2020
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
