import React, { useEffect, useState } from "react";
import GitHubAvatar from "./GitHubAvatar";
import GitHubContact from "./GitHubContact";
import GitHubImage from "./GitHubImage";
import GitHubInfo from "./GitHubInfo";
import GitHubName from "./GitHubName";
import { Col, Container, Row, Card, CardBody, CardSubtitle } from "reactstrap";

const API = "https://api.github.com/users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const useFetchProfile = username => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  let url = `${API}/${username}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading("true");
        const response = await fetch(url);

        const json = await response.json();
        console.log(json);
        setResult(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [result, loading];
};

const GitHubProfileCard = ({ username }) => {
  const [result, loading] = useFetchProfile(username);

  let content = null;

  if (loading) {
    content = null;
  } else {
    if (result) {
      content = (
        <Container className="free-bird">
          <Container>
            <Row>
              <Col lg={4} md={12} />
              <Col lg={5} md={12}>
                <Card>
                  <CardBody>
                    <GitHubImage />
                    <CardSubtitle>
                      <GitHubAvatar
                        username={username}
                        avatar={result.avatar}
                      />
                    </CardSubtitle>
                  </CardBody>
                  <CardBody>
                    <GitHubName
                      username={username}
                      name={result.name}
                      location={result.location}
                      company={result.company}
                    />
                    <GitHubContact blog={result.blog} email={result.email} />
                    <GitHubInfo
                      username={username}
                      repo={result.repo}
                      followers={result.followers}
                      following={result.following}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
  }

  return content;
};

export default GitHubProfileCard;
