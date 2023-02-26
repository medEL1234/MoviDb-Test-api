import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Navbar = ({ getMoviesBySearch }) => {
  const onSearch = (words) => {
    getMoviesBySearch(words);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <img className="logo" src="logo192.png" alt="dfs"></img>
          </Col>

          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="search"
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
