export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://webpage-server.herokuapp.com"
    : "http://loaclhost:8080";
