import React, { useState } from "react";

// STYLE
const linkStyle = "text-[19px] text-[#174a51] font-medium select-none";

// TYPES
type Position = "game" | "status" | "account" | "rules" | "contact";

const Navbar = () => {
  const [link, setLink] = useState<Position>("game");

  const position = () => {
    switch (link) {
      case "status":
        return "left-[3.7%]";
      case "rules":
        return "left-[21.2%]";
      case "game":
        return "left-[38.3%]";
      case "account":
        return "left-[57.4%]";
      case "contact":
        return "left-[78%]";
    }
  };

  const setLinkId = (id: Position) => setLink(id);

  return (
    <section className="fixed top-0 left-0 w-full h-[100px] font-sans">
      <div className="w-[600px] h-[50px] mt-[20px] rounded-full mx-auto relative">
        <span
          className={`absolute top-[11%] w-[100px] ${position()} duration-200 h-[40px] rounded-full bg-[#ffffff78] z-[900]`}
        />
        <ul className="w-[84%] h-full mx-auto flex justify-between items-center z-[1000] relative">
          <li onClick={() => setLinkId("status")}>
            <a href="#" className={linkStyle}>
              Status
            </a>
          </li>
          <li onClick={() => setLinkId("rules")}>
            <a href="#" className={linkStyle}>
              Rules
            </a>
          </li>
          <li onClick={() => setLinkId("game")}>
            <a href="#" className={linkStyle}>
              Game
            </a>
          </li>
          <li onClick={() => setLinkId("account")}>
            <a href="#" className={linkStyle}>
              Account
            </a>
          </li>
          <li onClick={() => setLinkId("contact")}>
            <a href="#" className={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
