import axios from "axios";

const KEY = "AIzaSyARnpXUMH7B2dWW2OG5RD37QvPw0sa2YEw";

export default axios.default({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxReeseults: 5,
    key: KEY
  }
});
