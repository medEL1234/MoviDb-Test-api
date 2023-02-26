import React from "react";
import { Row } from "react-bootstrap";
import CardMovi from "./CardMovi";
import PaginitionOne from "./PaginitionOne";

const CardList = ({ movies }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((item) => {
          return <CardMovi key={item.id} item={item} />;
        })
      ) : (
        <h1>Not data fond</h1>
      )}

      <PaginitionOne />
    </Row>
  );
};

export default CardList;
