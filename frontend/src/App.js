import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/edit/:id" element={<CreateNote />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
