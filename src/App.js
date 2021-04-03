import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./style/App.scss";
import EditPage from"./pages/EditPage"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <EditPage/>
    </div>
  );
}

export default App;
