import axios from "axios";

const BASE_URL = "https://burbuyit.herokuapp.com/api";
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .user
// );
const DEFAULTTOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjBmNzM0NmVmOWFiZjY5MDRkNzdiNmUiLCJ1c2VybmFtZSI6Imx1bmEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjQ2NDA3MDcyLCJleHAiOjE2NDg5OTkwNzJ9.qWs3eKjsJ5uRgQD7V4Q-lQTj3XP_N7z-zvGSjcYgtLI";

let TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser?.token;

TOKEN ??= DEFAULTTOKEN;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
