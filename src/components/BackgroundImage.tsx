import React from "react";

import image from "../assets/ligh-bg-img2.png";

const BackgroundImage = () => {
  return (
    <img
      className="-z-50 w-full h-full fixed top-0 left-0"
      src={image}
      alt=""
    />
  );
};

export default BackgroundImage;
