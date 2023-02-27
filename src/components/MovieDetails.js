import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieOne, setMovieOne] = useState();
  const param = useParams();
  console.log(param.id);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${param.id}`
    );
    setMovieOne(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img className="img-movie w-30" src="" alt="ascad"></img>

            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                Name of movie : {movieOne.title}
              </p>
              <p className="card-text-details border-bottom">
                History of movie
              </p>
              <p className="card-text-details border-bottom">
                Number of vus : {movieOne.vue}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">Story</p>
            </div>
            <div className="tex-end px-2">
              <p className="card-text-story">Story of movie</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-center-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              go to home
            </button>
          </Link>
          <Link to={movieOne.homePage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              watch the movie
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
