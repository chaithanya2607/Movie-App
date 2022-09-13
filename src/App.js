import "./App.css";
import { AddColor } from "./AddColor"; // named
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { Home } from "./Home";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./BasicForm";

export default function App() {
  const [movieList, setMovieList] = useState([]);

  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={24}>

        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Games
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movies
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {" "}
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/color-game" element={<AddColor />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
