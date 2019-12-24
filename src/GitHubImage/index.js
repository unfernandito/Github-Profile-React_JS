import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function GitHubImage({ url }) {
  return (
    <div className="card-up">
      <img
        src={url != null ? url : "./assets/computer.jpg"}
        className="img-fluid"
      />
    </div>
  );
}

export default GitHubImage;
