import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function GitHubContact({ email, blog }) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <p>Email</p>
        <a className="icons-sm" href={`mailto:${email}`}>
          <i id="email" className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </div>
      <div className="col-lg-6">
        <p>Website</p>
        <a className="icons-sm" href={`https://${blog}`} target="_blank">
          <i id="website" className="fa fa-globe" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default GitHubContact;
