import React, { useContext } from "react";
import { MovieContext } from "./Context";

const Card = () => {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <div>
      {state?.movies?.map((item, i) => {
        return (
          <div key={i}>
            <h1>MOVIE DETAILS</h1>
            <p>{item.Title}</p>
            <p>{item.Year}</p>

            <img src={item.Poster} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
