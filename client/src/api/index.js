import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
  baseURL: "https://image-generator-bbu2.onrender.com/api",
=======
  baseURL: "http://localhost:4000/api",
>>>>>>> da49b870cfa2228cafef65ebffad485a008f67f1
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
await API.post("/generateImage/", data);

//https://image-generator-4l8k.onrender.com/api/