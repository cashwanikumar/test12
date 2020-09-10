import React from "react";
import "./index.scss";
import { CardBody, Card } from "reactstrap";

const EachFeed = ({ title, date, name, bgClr }) => {
  return (
    <Card
      className="feed-div m-0 p-0 mt-3"
      style={{
        borderTop: `10px solid ${bgClr || 'red'}`,
      }}
    >
      <CardBody className="p-0">
        <div className="content">
          <div className="title-div">{title}</div>
          <div className="bottom-div">
            <span className="date">{date}</span>
            <span className="name">{name}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EachFeed;
