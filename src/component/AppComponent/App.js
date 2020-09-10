import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../TopBarComponent";
import NewsFeed from "../NewsFeedComponent";
import Register from "../RegisterComponent";
import { Row, Col } from "reactstrap";
import Info from "../InfoComponent";

import "./index.scss";

function App() {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Topbar />
        </Col>
      </Row>
      <Row className="app-content">
        <Col xs={12} md={4} className="div-border-right pl-4 pr-4">
          <Info />
        </Col>
        <Col xs={12} md={5} className="div-border-right pl-4 pr-4">
          <NewsFeed />
        </Col>
        <Col xs={12} md={3} className="pl-4 pr-4">
          <Register />
        </Col>
      </Row>
    </div>
  );
}

export default App;
