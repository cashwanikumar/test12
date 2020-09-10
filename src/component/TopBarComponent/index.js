import React from "react";
import { Input } from "reactstrap";

import "./index.scss";

const Topbar = () => {
  return (
    <div className="topbar-div">
      <span className="logo">
        <img
          src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_300,h_100/https://www.hesus.eu/wp-content/uploads/2019/01/HESUS-logo-RVB-web.jpg"
          width="100px"
        />
      </span>
      <Input className="search" placeholder="Search..."/>
    </div>
  );
};

export default Topbar;
