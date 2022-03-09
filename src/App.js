import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import { studentsList } from "./studentsList";
import "h8k-components";

const title = "Hostel Residents Search";
function App() {
  const [formData, setformData] = useState([]);
  const [errorThrown, setErrorThrown] = useState('');

  const onSearch = (data) => {
    setformData(data);
  };

  const error = (err) => {
    setErrorThrown(err);
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search onSearch={onSearch} error={error} />
        <Error errorThrown={errorThrown} />
        <ResidentsList formData={formData}  />
      </div>
    </div>
  );
}

export default App;
