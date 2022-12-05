import axios from "axios";

const baseurl = "https://swapi.py4e.com/api/";

export const getStarshipByID = async (id) => {
  // let people = []
  const res = await axios.get(baseurl + "starships/" + id);
  return res.data;
};
