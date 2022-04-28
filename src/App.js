import "./App.css";
import { Route, useNavigate, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import WeatherPage from "./Components/Pages/WeatherPage/WeatherPage";
import Favorites from "./Components/Pages/Favorites/Favorites";
import Settings from "./Components/Settings/Settings";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page.value);

  useEffect(() => {
    if (page === "favorites") {
      navigate("/favorites");
    } else {
      navigate("/");
    }
  }, [page, navigate]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<WeatherPage />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
      <Settings />
    </>
  );
}

export default App;
