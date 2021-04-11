import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:4000/v1",

  headers: {
    "Content-type": "application/json"
  }
});
