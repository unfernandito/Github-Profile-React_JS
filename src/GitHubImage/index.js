import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { Card, CardImg } from "reactstrap";

function GitHubImage({ url }) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={url != null ? url : "./assets/computer.jpg"}
      />
    </Card>
  );
}

export default GitHubImage;
