import { createContext, useReducer } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  //2. set the initial states
  const initialState = {
    movies: [],
    searchItem: "",
  };

  //3. create the reducer function --> function that changes the state
  const reducer = (state, action) => {
    switch (action.type) {
      case "SendData":
        console.log("We are here", action.payload);
        return { ...state, movies: action.payload };

      case "SearchedInput":
        return { ...state, searchItem: action.payload };

      default:
        return;
    }
  };

  //1.  useReducer --> we can use it for multiple states

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
