import React from "react";
import { useTheme } from "../../Context";
import "./index.css";

const Education = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <h4
        style={{
          backgroundColor: darkMode ? "white" : "black",
          color: darkMode ? "black" : "white",
        }}
        class="text-typo-primary mb-3 text-lg font-medium"
      >
        Education
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
            IIM Ahmedabad
          </div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-secondary ml-4 text-sm leading-6"
          >
            MBA
            <br />
            2021
          </div>
        </div>
      </div>
      <div className="element-box">
        <div className="circle"></div>
        <div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-primary ml-4 flex-1 text-base font-medium"
          >
            IIT DELHI
          </div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-secondary ml-4 text-sm leading-6"
          >
            BTECH
            <br />
            2015
          </div>
        </div>
      </div>
      <div className="element-box">
        <div className="circle"></div>
        <div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-primary ml-4 flex-1 text-base font-medium"
          >
            DPS R.K.Puram
          </div>
          <div
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
            class="text-typo-secondary ml-4 text-sm leading-6"
          >
            12th
            <br />
            2011
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
