import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovi = ({ item }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/MovieDetail/${item.id}`} />
      <div className="card">
        <img src={item.url} className="card__image" alt="hu"></img>
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>name of movie: {item.title}</p>
            <p>name of movie: adidas</p>
            <p>name of movie: adidas</p>
            <p>name of movie: adidas</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovi;
