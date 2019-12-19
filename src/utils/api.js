import axios from "axios";

export function getPosts(id) {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export function getPost(id) {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    params: { id }
  });
}

export function postNewPost({ title, body }) {
  return axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title,
      body
    }
  });
}

export function getComentsPost(id){
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
}

export function getComent(id){
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
}
