import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const StyledLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  padding:"0 20px"
`;

const useStyles = makeStyles({
  container: {
    boxSizing: "borderBox",
    borderRadius: 3,
    backgroundColor: "#FAFAFA",
    margin: 15,
    padding: "0 20px"
  },
  contentLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
  }
});

const Post = ({id, title, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className={classes.contentLink}>
      <StyledLink to={{pathname: `/post/${id}`}}>
        Learn more
      </StyledLink>
      <ChevronRightIcon />
      </div>
    </Card>
  );
};
export default Post;
