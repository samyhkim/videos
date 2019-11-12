import axios from "axios";

const KEY = "AIzaSyARnpXUMH7B2dWW2OG5RD37QvPw0sa2YEw";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
