import CardList from "./components/CardList";
import CardMovi from "./components/CardMovi";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageCount] = useState(0);

  //for get the list of movies
  const getAllMovies = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setMovies(res.data);
    setPageCount(res.data.total_page);
  };

  useEffect(() => {
    // getAllMovies();
  }, []);
  //get current page
  const getPage = async ({ page }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos&page=${page}`
    );
    setMovies(res.data);
  };
  //for search the specific movies
  const getMoviesBySearch = async ({ words }) => {
    if (words === "") {
      //getAllMovies();
    } else {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos&query=${words}`
      );
      setMovies(res.data);
      setPageCount(res.data.total_page);
    }
  };
  return (
    <div className="font color-body">
      <Navbar getMoviesBySearch={getMoviesBySearch} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <CardList
                  movies={movies}
                  getPage={getPage}
                  pageNumber={pageNumber}
                />
              }
            ></Route>
            <Route path="/MovieDetail/:id" element={<MovieDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
