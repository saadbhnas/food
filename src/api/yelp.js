import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -6ic_buNzQI22b_XKO31dVUJlQ_zpcHjfDwq3-DLI1g1n2vfDyXbpQ6GMGa8ochFhmzsA0E3zeg0Z8m7INtDqvOAEdm0dBQJmjYQ47jOLqKHlbpqccyxqajpW-xIX3Yx",
  },
});
