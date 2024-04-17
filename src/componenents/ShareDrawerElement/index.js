import React, { useState } from "react";

// QR Code Component
const QRCodeComponent = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleQRCodeClick = () => {
    console.log("QR Code clicked");
  };

  return (
    <div onClick={handleQRCodeClick} className="category-item">
      <div className="flex flex-col items-center justify-center ">
        <p className="mb-2 text-center text-base text-gray-500">Scan QR code</p>
        <div className="rounded-2xl border-2 border-dashed border-gray-300 p-2">
          <img
            src="https://mywc.link/qr.png?wid=6083&amp;type=v"
            width="250"
            height="250"
            alt="img"
          />
        </div>
        <a
          href="https://mywc.link/qr.png?wid=6083&amp;type=v"
          className="p-4 text-sm text-blue-500"
          download=""
        >
          Download QR Code
        </a>
      </div>
    </div>
  );
};

// Email Component
const EmailComponent = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleEmailClick = () => {
    console.log("Email clicked");
  };

  return (
    <div onClick={handleEmailClick} className="category-item">
      <div class="py-5">
        <div class="flex flex-col p-2">
          <p class="mb-3 text-base text-gray-500">Enter an email address</p>
          <div class="flex  ">
            <input
              class="mr-1 min-w-80
              block flex-grow  rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-300"
              placeholder="example@domain.com"
              type="email"
              inputmode="email"
              autocomplete="email"
            />
            <button className="bg-custom-purple text-white w-[72px] h-[42px] rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// WhatsApp Component
const WhatsAppComponent = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
  };

  return (
    <div onClick={handleWhatsAppClick} className="category-item">
      <div class="flex py-5 flex-col p-2">
        <p class="mb-3 text-base text-gray-500">
          Enter any WhatsApp mobile number with country code
        </p>
        <div class="flex w-full max-w-sm ">
          <input
            class=" block flex-grow min-w-80 mr-1 rounded-md border border-gray-300  shadow-sm focus:border-gray-300"
            placeholder=""
            autocomplete="tel"
            type="tel"
            inputmode="tel"
          />
          <button className="bg-custom-purple text-white w-[72px] h-[42px] rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Social Component
const SocialComponent = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleSocialClick = () => {
    console.log("Social clicked");
  };

  return (
    <div onClick={handleSocialClick} className="category-item">
      <div className="flex flex-row justify-center">
        <img
          class="h-10 w-10 m-3 rounded-full"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1713358235/pinterest_jwf52o.png"
          alt="Image 1"
        />
        <img
          class="h-10 m-3 w-10 rounded-full"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1713358222/twitter_ixiihh.png"
          alt="Image 2"
        />
        <img
          class="h-10 m-3 w-10 rounded-full"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMyLDMwYzAsMS4xMDQtMC44OTYsMi0yLDJIMmMtMS4xMDQsMC0yLTAuODk2LTItMlYyYzAtMS4xMDQsMC44OTYtMiwyLTJoMjhjMS4xMDQsMCwyLDAuODk2LDIsMlYzMHoiIGZpbGw9IiMwMDdCQjUiLz48Zz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE0IiB3aWR0aD0iNCIgeD0iNyIgeT0iMTEiLz48cGF0aCBkPSJNMjAuNDk5LDExYy0yLjc5MSwwLTMuMjcxLDEuMDE4LTMuNDk5LDJ2LTJoLTR2MTRoNHYtOGMwLTEuMjk3LDAuNzAzLTIsMi0yYzEuMjY2LDAsMiwwLjY4OCwyLDJ2OGg0di03ICAgIEMyNSwxNCwyNC40NzksMTEsMjAuNDk5LDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI4IiBmaWxsPSIjRkZGRkZGIiByPSIyIi8+PC9nPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
          alt="Image 3"
        />
        <img
          class="h-10 m-3 w-10 rounded-full"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAj5JREFUaENj1ApdxSbE8r753/9/sYyMjJIMQwL8f/b/P+PiD3+F6hitImZ0MDIylA8Jd6M58v9/hk5Gq4jpz4ZOyGME8wtG68gZ/4di6MPcPOqBgY690RigJAZYWZkZDDQkGSRFeRl4udmxGnX51guGSzdf4LRmQGKAh4uNITnEhMHTTp0BxMYH5q09yzBv7ZnB4wEVeWGG3nIvBmEBLqIib1B5QE5SgGFmUwDO5ILNR4PGA8zMTAzT6/0ZtFTEiAp5mKJB4wEXKxWGhhxnkhwPUjxoPDCt3p9BT11iaHqAm5ONYfvsBAYmJsah6QFzPVmG3govvI6//fAtw4J1ZxlA5f67j9+J9ihd6gE/J02GshQ7nI4COT6jfgPDz19/iHY4XRtz0b4GDJmR5jgdV92/i+Hg6fskOx6kgS4xkBRswpAUbIzTgT4ZCxk+fPoxdD1gFz2L4d9/8rolgyIGbKJmkhX6gyYJDRoPgCoqXTXMyspUV4bBREcaZyhPX34Sp9y5q08Zrt97TZ/WKKHMSk46KeveznDs/KOh6wH/rMUMbz98G5oeePP+K0NA9hK8EUfVUojaSejouYcM5T07hq4HQF1JUHMaHxjUMUAoA1O9HqB2EiKUganuAVxRTchjg6YiG/UAGTUdVTPxaAyMxgAZIUCMltFSCE8ojWbi0STEwMAwWhMTkwwoUTNaCg3zUmj6UwYGRilKkgghvTRMQk/pstiDdh7438EIWm4jwPyuiZHxfyytYoL6HkAstwEA98RIM0zUGvcAAAAASUVORK5CYII="
          alt="Image 4"
        />
      </div>
    </div>
  );
};

const ShareDrawerElement = () => {
  const [selectedCategory, setSelectedCategory] = useState("QRCode");

  return (
    <div>
      <div className="flex flex-row justify-around border-b-2 mb-3 border-gray-100">
        <button
          className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
            selectedCategory === "QRCode"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 border-transparent hover:border-gray-300 hover:border-b-2 hover:text-gray-700"
          }`}
          onClick={() => setSelectedCategory("QRCode")}
        >
          QR Code
        </button>
        <button
          className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
            selectedCategory === "Email"
              ? "text-gray-900 border-gray-900 border-b-2"
              : "text-gray-500 border-transparent hover:border-gray-300 hover:border-b-2 hover:text-gray-700"
          }`}
          onClick={() => setSelectedCategory("Email")}
        >
          Email
        </button>
        <button
          className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
            selectedCategory === "WhatsApp"
              ? "text-gray-900 border-gray-900 border-b-2"
              : "text-gray-500 border-transparent hover:border-gray-300 hover:border-b-2 hover:text-gray-700"
          }`}
          onClick={() => setSelectedCategory("WhatsApp")}
        >
          WhatsApp
        </button>
        <button
          className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
            selectedCategory === "Social"
              ? "text-gray-900 border-gray-900 border-b-2"
              : "text-gray-500 border-transparent hover:border-gray-300 hover:border-b-2 hover:text-gray-700"
          }`}
          onClick={() => setSelectedCategory("Social")}
        >
          Social
        </button>
      </div>

      <QRCodeComponent isVisible={selectedCategory === "QRCode"} />
      <EmailComponent isVisible={selectedCategory === "Email"} />
      <WhatsAppComponent isVisible={selectedCategory === "WhatsApp"} />
      <SocialComponent isVisible={selectedCategory === "Social"} />
    </div>
  );
};

export default ShareDrawerElement;
