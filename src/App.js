import CardList from "./components/CardList";
import CardMovi from "./components/CardMovi";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);

  //for get the list of movies
  const getAllMovies = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setMovies(res.data);
  };

  useEffect(() => {
    // getAllMovies();
  }, []);
  //for search the specific movies
  const getMoviesBySearch = async ({ words }) => {
    if (words === "") {
      //getAllMovies();
    } else {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos&query=${words}`
      );
      setMovies(res.data);
    }
  };
  return (
    <div className="font color-body">
      <Navbar getMoviesBySearch={getMoviesBySearch} />
      <Container>
        <CardList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
