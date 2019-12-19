import React from "react";
import styled from "styled-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Card, Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const StyledText = styled(Typography)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  padding:"0 20px"
`;

const useStyles = makeStyles(theme => ({
  container: {
    boxSizing: "borderBox",
    borderRadius: 3,
    backgroundColor: "#FAFAFA",
    margin: 5,
    padding: "0 20px",
    marginBottom: 20
  },
  user: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

const Coment = ({ name, email, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <div className={classes.user}>
        <div
          style={{
            width: "10%",
            margin: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Avatar className={classes.avatar} />
        </div>
        <div style={{ width: "90%", padding: 20 }}>
          <Typography>Name: {name}</Typography>
          <Typography>Email: {email}</Typography>
        </div>
      </div>
      <div style={{ margin: 15 }}>
        <Typography paragraph>{body}</Typography>
      </div>
    </Card>
  );
};
export default Coment;
