import axios from "axios";

const baseurl = "https://swapi.py4e.com/api/";

export const getPeopleByID = async (id) => {
  // let people = []
  const res = await axios.get(baseurl + "people/" + id);
  return res.data;
};
