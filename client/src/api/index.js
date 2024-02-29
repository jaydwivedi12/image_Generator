import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
await API.post("/generateImage/", data);

//https://image-generator-4l8k.onrender.com/api/