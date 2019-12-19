import React from "react";
import styled from "styled-components";
import { postNewPost } from "../utils/api";
import NavBar from '../components/NavBar';
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #333;
  margin-bottom: 10px;
  height: 50px;
  font-size: 25px;
  padding-left: 15px;
`;
const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #333;
  margin-bottom: 10px;
  height: 300px;
  font-size: 25px;
  padding-left: 15px;
`;
const Button = styled.button`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: #2ba0cc;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
`;

const Form = styled.form`
  width: 500px;
  border: 2px solid #333;
  padding: 10px 20px;
  margin: auto;
`;

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    postNewPost(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <div style={{margin:15}}>
        <h3>Add new content:</h3>
        </div>
        
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="title"
          onChange={this.handleChange}
          placeholder="title"
          value={title}
        />
        <TextArea
          name="body"
          onChange={this.handleChange}
          placeholder="body"
          value={body}
        />
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}
export default PostForm;
