import axios from "axios";

let URL = "https://do-it-bro.herokuapp.com/api/";
// let URL =
//   "https://931c-2405-201-301b-3a9b-cdec-1336-f62e-8c5f.in.ngrok.io/api/";

export default axios.create({
  baseURL: URL,
});
