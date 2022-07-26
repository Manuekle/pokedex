import axios from "axios";

export default (route = "") => {
  let url = "";
  if (route == "1") {
    url = "https://pokeapi.co/api/v2/pokemon/";
  } else {
    url = "https://pokeapi.co/api/v2/pokemon/";
  }

  return axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};