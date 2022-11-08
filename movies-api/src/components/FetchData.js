import React, { useContext, useEffect } from "react";
import { MovieContext } from "./Context";

// Step 1. fetch data

const FetchData = () => {
  const { state, dispatch } = useContext(MovieContext);

  console.log(state.searchItem);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=e4f9cdc4&s=${state.searchItem}`
      );

      const data = await response.json();

      //dispatch --> send datat to the "SendData case in Context.js"
      dispatch({ type: "SendData", payload: data.Search });

      console.log(data);
    };

    getData();
  }, [state.searchItem]);

  return <div>FetchData</div>;
};

export default FetchData;

// 2. make data variable global ==> create Context
