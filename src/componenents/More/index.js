import React from "react";
import { useTheme } from "../../Context";

const More = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div id="block_9984" className="mb-8">
      <h4
        style={{
          backgroundColor: darkMode ? "white" : "black",
          color: darkMode ? "black" : "white",
        }}
        className="text-typo-primary mb-3 text-lg font-medium"
      >
        More
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div class="flex flex-row">
          <div className="mr-2 h-8 w-8 flex-shrink-0">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABt0lEQVRoge2YS05CMRiFvxofQwMajPGxAUxkB+rYfbASdgATF6FTpzh2AzjQCSQaMEGGRnPrhESibW976eMOekaUctvvcHv+NoWsrKyslBK6DvnMtYQbBEdI1Q/CtMXffsGEgq5oc6/i1BooXhgDx0nhf9tj0eZUxbmh+nKpusADnKgRTQbqA2+U6Q1UgnFtrwMPtgZSwxvMlBuoMTyUGag5PLiEuIbwEDkDleHrkIEQ8ACbxl7FYPPXXb4+zY9V1db2N839hX5+hapnILQs57P7K1cGaxwu4i+bFBmIAQ+B9oFY8BBgH4gJDxUyMH8LXIX2LDK2IvcMhFbofaBx8L9OB1s2MTKQEh7WPAtFgw+xD9QBHqqchab2VUh3tnkctejfnvG+2KEoCqSUSCm1ny86syGMlHPEOwutPD+4c4Pv9UdXumGd9gEBNFv2ZyFde/ZhCX8+Hfb6T1p4cMiAzzVvDT8ww5cbCBRYX/BmAwGrjS94KHkDoUqlL3gwGAhZ533BQ6J7IV/wkOBeCPAGD4nuRn3Bg8mAYFIFzjYDPuDBZKCgi1yacICzaV92Zg8+4LOysrLS6wduwTTZx9I3uQAAAABJRU5ErkJggg=="
              alt="Demo"
            />
          </div>
          <div className="w-full overflow-hidden">
            <h6
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              className="text-typo-primary text-base font-medium leading-5"
            >
              This is a demo card and all content are taken from internet for
              demo purpose only
            </h6>
            <div
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              className="text-typo-secondary text-xs"
            >
              Note
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div className="mr-2 h-8 w-8 flex-shrink-0">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD5klEQVRoge2ZS0xcVRjHf+fOpHTMAHccsJSGxGFRTQyO8dFEI5oYo5GyMiy6cdOFGo2u6Qbjri5dCMadS2njopU2gk0j9hVfwJhIKYZLhwEawnTuzGDLPO49LoYOWOYOc++dccDwX52553v9c75zvu+cEewAXddDhqn0S0EPyMOAZycdlzBALAvJiEcxP1NVVSsnLMpNxpPJN6XJWcBf1RArR1oI2RdU1VErAUsCuq6H8lJEqF/wD5D2YHYFAoHbpSYVKy3DVPqpf/AAjYZQ+q0mLQkUcn6XQFrHYklgY8PuFhyxmihDoOanjR1YxlKOwJ6At1qGtKU7/HDjd7TFOwghCLW38fqLz/L44UP/kovrKb769gIA777dQ1BtcuW3KiswdWuOoeHvmJmPkc3lyWRz3JxfYPCb80RmtW2ycT1FXE8xdWvOtW/XBO6tZzgzNo5pmtvmTNPk7Ng49zPZ4re8YZQcO4VrAtNalPWNAINqE6dOnuDUyRPF1Li3nmFai7p1YwnXBBKpteI4fLSToNpEUG0ifLSz+P1uMu3WjSVcE9iaOl6Pp+S4VHpVC3v+GN0nUG/sE6g39gkoyqYJu0fqVl3H/t0a8Pt8xfHdEkWtJdBsWdQaH9nUdQrX3WhHW0txfFOLcj+TxddwoNhWbMXDbUVHW6tb9+5XoL21hccCKrDR2I3+iGFsr7yGYXJmdLOxO/RogPbWoFv37gkIAcdfOVb8HZnVGBw+x/T8AplsrtBaa1G+GD7HH39ttta9W3Rc+beaWE0kpR1DIz/9zOVfJiuSfe2FZ+jptkegJdBcMtaq3ciOdx/D7zvIxau/kjfyJWW8Hi9vvfw8rz73dLXcVm8FHiCRXuPa5J/MaFFWkymgcE94LtTBS+GnCDQ6e2qyWgEB0DmU6pWSARBh4MDDQmoDdB+Bj8Mm6kFH/itGYh0+nxRcXRLomZIiWZBTAvnp3AfNI6IQvDhfifEnApKv35B4alS/DRPe+V4wq5d9si1CYPYq0uSTSh3MJASXFioz7gSXYpUHDyDxDCgIYWtHXY7Zjqty2wt2NWRYoUTOl8P1ZUGuBjfEvAk3lm2vboPtbP47BxMr1U+j31YEazn7eo6245UlJ1o72Fx0pueIwPhi9Vfgiv30ARwSWFyDSNyRv5KIrELM4dOR4xN94JrCxEph8zlF3oSJFRi47rywiNBg2lHLsFuwfyeuN/4XBNw/0tcPhgLUoCz9V5AxBbhY7zCcQiIuKKZhnAZq9w9E7ZBSPN7Tyu2PVA0p+thbJFIoom/uPV9UAdA+9I9iersEfAlE2Z0b2wCiEoaEx9ulve8fA/gHXD1kUiVkQZUAAAAASUVORK5CYII="
              alt="Resume"
            />
          </div>
          <div className="w-full overflow-hidden">
            <h6
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              className="text-typo-primary text-base font-medium leading-5"
            >
              Resume
            </h6>
            <div
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              className="text-typo-secondary text-xs"
            >
              Attachment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
