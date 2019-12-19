import React from "react";
import styled from "styled-components";
import { postNewPost } from "../utils/api";
import NavBar from "../components/NavBar";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    return (
      <div style={{ margin: 40 }}>
        <h2>Datos de contacto:</h2>
        <p> Jenny Llerena, jennyller22@gmail.com</p>
      </div>
    );
  }
}
export default PostForm;
