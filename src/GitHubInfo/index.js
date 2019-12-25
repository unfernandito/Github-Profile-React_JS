import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { Col, Row } from "reactstrap";

function GitHubInfo({ username, repo, followers, following }) {
  return (
    <div>
      <hr />
      <Row>
        <Col lg={4}>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
          >
            <h5 class="pt-1">Repos</h5>
          </a>
          <p>{repo}</p>
        </Col>
        <Col lg={4}>
          <a
            href={`https://github.com/${username}?tab=followers`}
            target="_blank"
          >
            <h5 class="pt-1">Followers</h5>
          </a>
          <p>{followers}</p>
        </Col>
        <Col lg={4}>
          <a
            href={`https://github.com/${username}?tab=following`}
            target="_blank"
          >
            <h5 class="pt-1">Following</h5>
          </a>
          <p>{following}</p>
        </Col>
      </Row>
    </div>
  );
}

export default GitHubInfo;
