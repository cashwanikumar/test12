import React from "react";
import { Card } from "reactstrap";

import './index.scss'

const Info = () => {
  return (
    <div className="info-container">
      <Card className="welcome p-3">
        <div className="fs-1-5 mb-2">Welcome <strong>Jack</strong></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
      <Card className="about mt-4 p-3">
        <strong className="fs-1-5 mb-2">About Us</strong>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here.{`  `}
          <a href="#" className="bld">View More</a>
        </p>
      </Card>
    </div>
  );
};

export default Info;
