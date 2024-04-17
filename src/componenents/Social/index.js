import React from "react";
import { useTheme } from "../../Context";

const Social = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <div id="block_9983" className="mb-8 ">
        <h4
          style={{
            backgroundColor: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white",
          }}
          className="text-typo-primary mb-3 text-lg font-medium"
        >
          Website & Social Links
        </h4>
        <div className="grid ml-4 grid-cols-1 sm:grid-cols-2">
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMyLDMwYzAsMS4xMDQtMC44OTYsMi0yLDJIMmMtMS4xMDQsMC0yLTAuODk2LTItMlYyYzAtMS4xMDQsMC44OTYtMiwyLTJoMjhjMS4xMDQsMCwyLDAuODk2LDIsMlYzMHoiIGZpbGw9IiMwMDdCQjUiLz48Zz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE0IiB3aWR0aD0iNCIgeD0iNyIgeT0iMTEiLz48cGF0aCBkPSJNMjAuNDk5LDExYy0yLjc5MSwwLTMuMjcxLDEuMDE4LTMuNDk5LDJ2LTJoLTR2MTRoNHYtOGMwLTEuMjk3LDAuNzAzLTIsMi0yYzEuMjY2LDAsMiwwLjY4OCwyLDJ2OGg0di03ICAgIEMyNSwxNCwyNC40NzksMTEsMjAuNDk5LDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI4IiBmaWxsPSIjRkZGRkZGIiByPSIyIi8+PC9nPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
                alt="LinkedIn"
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
                Wcard.io
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Linkedin
              </div>
            </div>
          </div>

          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MCA2MCIgd2lkdGg9IjYwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJibGFjayIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJnaXRodWIiPjxwYXRoIGQ9Ik0zMCw2MCBDNDYuNTY4NTQzMyw2MCA2MCw0Ni41Njg1NDMzIDYwLDMwIEM2MCwxMy40MzE0NTY3IDQ2LjU2ODU0MzMsMCAzMCwwIEMxMy40MzE0NTY3LDAgMCwxMy40MzE0NTY3IDAsMzAgQzAsNDYuNTY4NTQzMyAxMy40MzE0NTY3LDYwIDMwLDYwIFoiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjUuNDI1MjczOSw0Ny41MTY4ODg3IEMyNS40MjUyNzM5LDQ3LjA2NzE3MjkgMjUuNDA5NDA3Miw0NS44NzcyMjcyIDI1LjQwMDM0MDUsNDQuMjk2ODMwNSBDMjAuMjY1MTc3OSw0NS40NDAyOTQgMTkuMTgxNzA1MSw0MS43NTg4OTk0IDE5LjE4MTcwNTEsNDEuNzU4ODk5NCBDMTguMzQxOTAwMywzOS41NzE5MDkzIDE3LjEzMTQ5MzQsMzguOTg5NzE5MSAxNy4xMzE0OTM0LDM4Ljk4OTcxOTEgQzE1LjQ1NTI4MzgsMzcuODE0ODgwMSAxNy4yNTg0Mjc0LDM3LjgzOTI4MzMgMTcuMjU4NDI3NCwzNy44MzkyODMzIEMxOS4xMTE0MzgsMzcuOTcyOTE5OCAyMC4wODYxMTAyLDM5Ljc5MDM3NTkgMjAuMDg2MTEwMiwzOS43OTAzNzU5IEMyMS43MzI4NTI5LDQyLjY4MjczNDIgMjQuNDA2NDAxNSw0MS44NDgzNzc3IDI1LjQ1OTI3NDEsNDEuMzYzODAwMiBDMjUuNjI3MDA4NCw0MC4xNDAxNTQ5IDI2LjEwNDE0NDUsMzkuMzA1Nzk4NCAyNi42MzExNDc1LDM4LjgzMjg0MTUgQzIyLjUzMTg1NzUsMzguMzU1MjM2MyAxOC4yMjE3NjYzLDM2LjczMDY4MTUgMTguMjIxNzY2MywyOS40NzcxMjU3IEMxOC4yMjE3NjYzLDI3LjQxMDk4OTQgMTguOTQxNDM3LDI1LjcyMTM1OTUgMjAuMTIyMzc3MSwyNC4zOTc3NzczIEMxOS45MzMxMDkzLDIzLjkxOTAxMDEgMTkuMjk4NDM5MSwyMS45OTQ2NDQ3IDIwLjMwMzcxMTUsMTkuMzg4MTUyMyBDMjAuMzAzNzExNSwxOS4zODgxNTIzIDIxLjg1NDEyMDMsMTguODc5MTcxNiAyNS4zNzk5NDA0LDIxLjMyODc4NjQgQzI2Ljg1MjE0ODcsMjAuOTA5Mjg0MSAyOC40MzIwMjQ0LDIwLjY5Nzc4OTggMzAuMDAyODMzMywyMC42OTA4MTc1IEMzMS41NzAyNDIzLDIwLjY5Nzc4OTggMzMuMTQ4OTg0NiwyMC45MDkyODQxIDM0LjYyNDU5MywyMS4zMjg3ODY0IEMzOC4xNDgxNDY0LDE4Ljg3OTE3MTYgMzkuNjk2Mjg4NSwxOS4zODgxNTIzIDM5LjY5NjI4ODUsMTkuMzg4MTUyMyBDNDAuNzAzODI3NiwyMS45OTM0ODI3IDQwLjA3MDI5MDcsMjMuOTE3ODQ4IDM5Ljg3OTg4OTYsMjQuMzk3Nzc3MyBDNDEuMDYzMDk2MywyNS43MjEzNTk1IDQxLjc3NzEwMDQsMjcuNDEwOTg5NCA0MS43NzcxMDA0LDI5LjQ3NzEyNTcgQzQxLjc3NzEwMDQsMzYuNzQ5Mjc0NCAzNy40NjAyMDkxLDM4LjM0OTQyNiAzMy4zNDczMTkxLDM4LjgxNzczNDcgQzM0LjAxMTQ1NjIsMzkuNDAyMjQ5MSAzNC42MDA3OTI5LDQwLjU1NzMzMzEgMzQuNjAwNzkyOSw0Mi4zMjM2NTg4IEMzNC42MDA3OTI5LDQ0Ljg1NDYxNzYgMzQuNTc2OTkyNyw0Ni44OTYzNTA2IDM0LjU3Njk5MjcsNDcuNTE2ODg4NyBDMzQuNTc2OTkyNyw0OC4wMjM1NDUzIDM0LjkxMDE5NDYsNDguNjExNTQ1OCAzNS44NDc0NjY2LDQ4LjQyNjc3ODggQzQzLjE3Njc3NSw0NS45MTkwNjEyIDQ4LjQ2MTUzODUsMzguODI4MTkzMiA0OC40NjE1Mzg1LDMwLjQ2ODM1OTcgQzQ4LjQ2MTUzODUsMjAuMDEzMzM4NiA0MC4xOTQ5NTgxLDExLjUzODQ2MTUgMjkuOTk5NDMzMywxMS41Mzg0NjE1IEMxOS44MDUwNDE5LDExLjUzODQ2MTUgMTEuNTM4NDYxNSwyMC4wMTMzMzg2IDExLjUzODQ2MTUsMzAuNDY4MzU5NyBDMTEuNTM5NTk0OSwzOC44MzA1MTc0IDE2LjgyODg5MTcsNDUuOTI2MDMzNSAyNC4xNjUwMDAxLDQ4LjQyOTEwMjkgQzI1LjA4NzUzODcsNDguNjAyMjQ5MyAyNS40MjUyNzM5LDQ4LjAxNzczNSAyNS40MjUyNzM5LDQ3LjUxNjg4ODcgWiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PC9zdmc+" />
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                github.com/wcard.io
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Github
              </div>
            </div>
          </div>

          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAj5JREFUaENj1ApdxSbE8r753/9/sYyMjJIMQwL8f/b/P+PiD3+F6hitImZ0MDIylA8Jd6M58v9/hk5Gq4jpz4ZOyGME8wtG68gZ/4di6MPcPOqBgY690RigJAZYWZkZDDQkGSRFeRl4udmxGnX51guGSzdf4LRmQGKAh4uNITnEhMHTTp0BxMYH5q09yzBv7ZnB4wEVeWGG3nIvBmEBLqIib1B5QE5SgGFmUwDO5ILNR4PGA8zMTAzT6/0ZtFTEiAp5mKJB4wEXKxWGhhxnkhwPUjxoPDCt3p9BT11iaHqAm5ONYfvsBAYmJsah6QFzPVmG3govvI6//fAtw4J1ZxlA5f67j9+J9ihd6gE/J02GshQ7nI4COT6jfgPDz19/iHY4XRtz0b4GDJmR5jgdV92/i+Hg6fskOx6kgS4xkBRswpAUbIzTgT4ZCxk+fPoxdD1gFz2L4d9/8rolgyIGbKJmkhX6gyYJDRoPgCoqXTXMyspUV4bBREcaZyhPX34Sp9y5q08Zrt97TZ/WKKHMSk46KeveznDs/KOh6wH/rMUMbz98G5oeePP+K0NA9hK8EUfVUojaSejouYcM5T07hq4HQF1JUHMaHxjUMUAoA1O9HqB2EiKUganuAVxRTchjg6YiG/UAGTUdVTPxaAyMxgAZIUCMltFSCE8ojWbi0STEwMAwWhMTkwwoUTNaCg3zUmj6UwYGRilKkgghvTRMQk/pstiDdh7438EIWm4jwPyuiZHxfyytYoL6HkAstwEA98RIM0zUGvcAAAAASUVORK5CYII=" />
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                Wcard.io
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Facebook
              </div>
            </div>
          </div>
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <svg
                width="34px"
                height="32px"
                viewBox="0 0 54 52"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>icn_revv_com</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="4.31945448%"
                    x2="50%"
                    y2="97.8460643%"
                    id="linearGradient-1"
                  >
                    <stop stopColor="#A3A2E0" offset="0%" />
                    <stop stopColor="#8D8BE0" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  id="Results"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-107.000000, -260.000000)"
                    fill="url(#linearGradient-1)"
                    fillRule="nonzero"
                  >
                    <g
                      id="icn_revv_com"
                      transform="translate(107.000000, 260.000000)"
                    >
                      <path
                        d="M35.3195615,51.3432606 C41.0905926,46.0026395 44.9861319,37.8891531 45.618794,28.6666667 L53.5349994,28.6666667 C52.4781593,39.3110629 45.1621287,48.1141456 35.3195615,51.3432606 Z M29.9333333,48.9016886 L29.9333333,28.6666667 L40.2702159,28.6666667 C39.5876274,37.1839681 35.6588953,44.6322377 29.9333333,48.9016886 Z M35.2898979,0.64702689 C45.1474267,3.8681736 52.4770979,12.6782465 53.5349994,23.3333333 L45.6175758,23.3333333 C44.9800562,14.1023756 41.0735454,5.98386495 35.2898979,0.64702689 Z M29.9333333,3.11597391 C35.6544385,7.38208582 39.5821369,14.8228625 40.2687925,23.3333333 L29.9333333,23.3333333 L29.9333333,3.11597391 Z M13.7741117,23.3333333 C14.4590495,14.8441534 18.3688339,7.41932205 24.0666667,3.14805139 L24.0666667,23.3333333 L13.7741117,23.3333333 Z M13.7726883,28.6666667 L24.0666667,28.6666667 L24.0666667,48.869611 C18.3643872,44.594993 14.4535705,37.1626768 13.7726883,28.6666667 Z M0.465000647,28.6666667 L8.42411015,28.6666667 C9.05762862,37.9016356 12.9628627,46.0246005 18.746786,51.3649307 C8.87076165,48.1536739 1.52421397,39.3349667 0.465000647,28.6666667 Z M0.465000647,23.3333333 C1.52527275,12.6543694 8.88545496,3.8286978 18.7764095,0.625456277 C12.9798984,5.9619758 9.06370752,14.0899302 8.42532841,23.3333333 L0.465000647,23.3333333 Z"
                        id="Mask"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                Wcard.io
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Linkedin
              </div>
            </div>
          </div>
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <svg
                width="34px"
                height="32px"
                viewBox="0 0 54 52"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>icn_revv_com</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="4.31945448%"
                    x2="50%"
                    y2="97.8460643%"
                    id="linearGradient-1"
                  >
                    <stop stopColor="#A3A2E0" offset="0%" />
                    <stop stopColor="#8D8BE0" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  id="Results"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-107.000000, -260.000000)"
                    fill="url(#linearGradient-1)"
                    fillRule="nonzero"
                  >
                    <g
                      id="icn_revv_com"
                      transform="translate(107.000000, 260.000000)"
                    >
                      <path
                        d="M35.3195615,51.3432606 C41.0905926,46.0026395 44.9861319,37.8891531 45.618794,28.6666667 L53.5349994,28.6666667 C52.4781593,39.3110629 45.1621287,48.1141456 35.3195615,51.3432606 Z M29.9333333,48.9016886 L29.9333333,28.6666667 L40.2702159,28.6666667 C39.5876274,37.1839681 35.6588953,44.6322377 29.9333333,48.9016886 Z M35.2898979,0.64702689 C45.1474267,3.8681736 52.4770979,12.6782465 53.5349994,23.3333333 L45.6175758,23.3333333 C44.9800562,14.1023756 41.0735454,5.98386495 35.2898979,0.64702689 Z M29.9333333,3.11597391 C35.6544385,7.38208582 39.5821369,14.8228625 40.2687925,23.3333333 L29.9333333,23.3333333 L29.9333333,3.11597391 Z M13.7741117,23.3333333 C14.4590495,14.8441534 18.3688339,7.41932205 24.0666667,3.14805139 L24.0666667,23.3333333 L13.7741117,23.3333333 Z M13.7726883,28.6666667 L24.0666667,28.6666667 L24.0666667,48.869611 C18.3643872,44.594993 14.4535705,37.1626768 13.7726883,28.6666667 Z M0.465000647,28.6666667 L8.42411015,28.6666667 C9.05762862,37.9016356 12.9628627,46.0246005 18.746786,51.3649307 C8.87076165,48.1536739 1.52421397,39.3349667 0.465000647,28.6666667 Z M0.465000647,23.3333333 C1.52527275,12.6543694 8.88545496,3.8286978 18.7764095,0.625456277 C12.9798984,5.9619758 9.06370752,14.0899302 8.42532841,23.3333333 L0.465000647,23.3333333 Z"
                        id="Mask"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                Personal Website
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Website
              </div>
            </div>
          </div>
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img src="data:image/png;base64,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" />
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                +91000
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Xboxid
              </div>
            </div>
          </div>
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img src="data:image/png;base64,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" />
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                Dribble
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Dribble
              </div>
            </div>
          </div>
          <div
            className="gaclick items mb-5 flex cursor-pointer items-center justify-between"
            data-action="link_13779"
            data-category="link_clicks"
            rel="nofollow"
          >
            <div className="mr-2 h-8 w-8 flex-shrink-0">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEQUlEQVRoge2YS2hcZRTHf+fOK7FpfbWdtMnUKCZRCz4QoSspgogp2oUQYltTH3WiVLE+0BoVpmJEYkAEu2gixgbJIqCrmhioFNyJLqQaa/MQzMQ8JvVRkppJZuYeF0nHPObO3O+6SBfzX82c7/zP+f/vuTPfvR8UUUQRRawn5P+QKyZ7d4nQAoBq81j5nm/d8G7+rGOXZWkLgIo2Dz3a5IqXC54NhCf7NwQlcx6oAECJh2aoHq6um8/Hq+rsLAmGUkNA5VLo95J0Se3ZxsZLXnRYXkgAAbFf4bJ4ACEyv0meKsQLBVNN/CceoCLpT77sVYenCYQn+7eGJDOssHHFQoEpLF39YZYbX8SsL6M15x5rmjDV4mkCIcm8s0Y8LE2BJ514wdDCYdaKByjL+Il50WI8gRvGT91q+6yzgD9ngsMUbu/q2pD0J0eAsEPpjM+y7jzXcOgnEz3GE1DLasNJPCxNQZ9YHZ73JZ/DWTyAL2Pb75nqMZpA5UTfbrH0TMHEVVPY2XO8LJUOjABbXXDvH9wfPe1Wk/sJaMwSizZXuUJkYZM8fvnrQtr/Am7EL3LbiMVc63I9gR2JvoOq+qnbfGB004XZ6rmBv0r9afkVuM41U+Xg4P6nu9ykujJQGe8plUDZeYSIaxGAIE2lp0fDKvK2CQ80/o//Uu1Y/UtzhTJdjUoCZS+aigdQ+M1G4qY8kMhV6bIjbjILGiif6N2C8Kq5CL6Jhx/sHxoa7wJ+8MB//cbujnz/WoALAwFLY8DVpt1t5CgAsZitom+a8oGNAbXfKpSU9zewfbqv1mfrj0DArLd+EQ/veWR5pKa7/WvgPrM6pG3bvmP4wDM/OyXknYDP1laMxZMRW9ZeOZujgBrW8ls+6918CY4GIokv7wUeNmwIysnRbXVrrtjggeh3Cp97qLe3trvDcXK5DagKiLtNayWSGTtzzGnRZ/EGkDItqtiOm1vOYGWibx/KPaaNgOPj2x8adVr8pSE6qCIfm5eVu6prtzXkWlljYOdAT1DAcOMBgZkF9bUWyrNT6RgwY1xfpaWqs7NkdXyNgYuby44AN5k2UNXWqfIHEoXyRhqfTQAfmNYHqgKh9POrgysM7Pj71LUCr3koPj3nS3/oNjngT70PTJk2EbS5pvvE5uWxFQbspMQweejKVtZjF7bsdX1bDNQfnlWWTjPMcI0iKzbFrIG79fuASOGX8hxILdh+k6dUAErTJZ8AaVOewKHdZ2LZF6qsgYvDCQvzjQbAtq2g8avpfCplAbaXftPTt2V1Zz8MV9fNq2oT8KdhwVCJzp2ojH/l+ta75eRH12tpph0ImrWSP1CiA/X1C9mIWYFFRKZ6804qHq7LWbemuz0vb3Bf1FiP54OtKwVFA+uNooH1RtHAesOrgTHHFSXfMYozD/Vw/OLRgArRnEKVuFoazdMtmluoxoU8vCKKKKKIKxb/Am6wYYv+vgZGAAAAAElFTkSuQmCC" />
            </div>
            <div className="w-full overflow-hidden">
              <h6
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-primary text-base font-medium leading-5"
              >
                Linktree
              </h6>
              <div
                style={{
                  backgroundColor: darkMode ? "white" : "black",
                  color: darkMode ? "black" : "white",
                }}
                className="text-typo-secondary text-xs"
              >
                Linktree
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
