import Nav from "./Nav";
import Colors from "./Colors";
import Color from "./Color";
import AddColorForm from "./AddColorForm"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  const [colorList, setColorList] = useState(["red", "green", "blue"])

  const addColor = (newColor) => {
    setColorList(prevColorList => [...prevColorList, newColor])
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/colors" element={<Colors colorList={colorList} />} />
        <Route exact path="/colors/:color" element={<Color colorList={colorList} />} />
        <Route exact path="/colors/new" element={<AddColorForm addColor={addColor} />} />
        <Route path="*" element={<Navigate replace to="/colors" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
