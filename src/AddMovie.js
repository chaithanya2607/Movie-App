import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="add-movie-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard"
        />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="standard"
        />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="standard"
        />

        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard"
        />

        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="standard"
        />

        <Button
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            setMovieList([...movieList, newMovie]);
            navigate("/movies");
          }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
