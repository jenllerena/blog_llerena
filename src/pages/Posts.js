import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/Post";
import { getPosts } from "../utils/api";
import NavBar from '../components/NavBar';

const StyledP = styled(Typography)`
  color: #000;
  align: justify;
  padding: 0 10px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
`;

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    getPosts()
      .then(res => {
        this.setState({
          posts: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  renderPosts = () => {
    const { posts } = this.state;
    return posts.map(post => {
      const { title, body, id } = post;
      return <Post key={id} title={title} body={body} id={id} />;
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
      <div style={{ alignItems: "center" }}>
        <div style={{ margin: 30, alignItems: "center" }}>
          <Typography paragraph>
            est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
            ea dolores neque fugiat blanditiis voluptate porro vel nihil
            molestiae ut reiciendis qui aperiam non debitis possimus qui neque
            nisi nulla
          </Typography>
        </div>
        <Container>{loading ? "loading..." : this.renderPosts()}</Container>
      </div>
      </div>
    );
  }
}
export default Posts;
