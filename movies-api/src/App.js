import "./App.css";
import { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "./components/Context";
import FetchData from "./components/FetchData";
import Card from "./components/Card";

function App() {
  const { state, dispatch } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  //make data available in the whole file
  console.log(state.movies);

  const handleClick = () => {
    dispatch({ type: "SearchedInput", payload: search });
  };

  return (
    <div className="App">
      <FetchData />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2"
        placeholder="search movie"
      />
      <button onClick={handleClick}>Search</button>

      <Card />
    </div>
  );
}

export default App;
