import React from "react";
import styled from "styled-components";
import { Container, Typography, Card, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { getPost, getComentsPost, getComent } from "../utils/api";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Coment from "../components/Coment";
const StyledLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  padding: "0 0px";
`;

const styles = theme => ({
  container: {
    boxSizing: "borderBox",
    border: 5,
    borderRadius: 2,
    backgroundColor: "#fafafa",
    padding: 20
  },

  title: {
    color: "#5882FA"
  }
});

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      coments: [],
      loading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params || this.props.id;
    getPost(id)
      .then(res => {
        const { title, body } = res.data[0];
        this.setState({
          body,
          title,
          coments: [],
          loading: false
        });
      })
      .catch(err => console.log(err));

    getComentsPost()
      .then(res => {
        this.setState({
          coments: res.data
        });
      })
      .catch(err => console.log(err));

    getComent(id)
      .then(res => {
        const { name, email, body } = res.data[id];
        this.setState({
          nameUser: name,
          email,
          bodyComent: body
        });
      })
      .catch(err => console.log(err));
  }

  renderComents = () => {
    const { coments } = this.state;
    return coments.map(coment => {
      const { postId, name, email, body } = coment;
      return <Coment key={postId} name={name} email={email} body={body} />;
    });
  };
  render() {
    const { classes } = this.props;
    const { title, body, loading } = this.state;
    return loading ? (
      "loading..."
    ) : (
      <Container>
        <div style={{ alignItems: "center", padding: 2,marginTop:20, display: "flex" }}>
          <ChevronLeftIcon />
          <StyledLink to="/">Back</StyledLink>
        </div>
        <div style={{ margin: 15, paddingVertical: 20 }}>
          <h1 style={{ color: "#0B0B61" }}>{title}</h1>
          <p>{body}</p>
        </div>
        <div style={{ margin: 15, marginTop: 40 }}>
          <h3 className={classes.title}>Comments</h3>
          <div>{this.renderComents()}</div>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Post);
