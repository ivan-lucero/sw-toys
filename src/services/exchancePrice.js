import axios from "axios";

const baseurl =
  "https://api.currencyapi.com/v3/latest?apikey=ECSFP6RF5NbT8PFPYBtQmBkQgC7jfDryVG5d7O6B";
// const baseurl = "ASD";
export const getARSvalue = async () => {
  // const res = await axios.get(baseurl);
  // return res.data.data.ARS.value;
  return 167.654809;
};

export const getEURvalue = async () => {
  // const res = await axios.get(baseurl);
  // return res.data.data.EUR.value;
  return 0.949023;
};
