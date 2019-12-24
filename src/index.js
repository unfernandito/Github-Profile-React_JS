import React from "react";
import GitHubAvatar from "./GitHubAvatar";
import GitHubContact from "./GitHubContact";
import GitHubImage from "./GitHubImage";
import GitHubInfo from "./GitHubInfo";
import GitHubName from "./GitHubName";

const API = "https://api.github.com/users";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function useFetchProfile(username) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState("false");
  let url = `${API}/${username}`;

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading("true");
        const response = await fetch(url);

        const json = await response.json();
        // console.log(json);
        setResult(json);
      } catch (error) {
        setLoading("null");
      }
    }

    fetchData();
  }, []);

  return [result, loading];
}

function GitHubProfileCard({ username }) {
  const [result, loading] = useFetchProfile(username);

  let content = null;

  if (loading) {
    content = null;
  } else {
    if (result) {
      content = (
        <div className="container free-bird">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12"></div>
              <div className="col-lg-5 col-md-12">
                <div className="card-wrapper">
                  <div className="card-rotating">
                    <div className="face front">
                      <GitHubImage />
                      <GitHubAvatar
                        username={username}
                        avatar={result.avatar}
                      />
                      <div className="card-block">
                        <GitHubName
                          username={username}
                          name={result.name}
                          location={result.location}
                          company={result.company}
                        />
                        <GitHubContact
                          blog={result.blog}
                          email={result.email}
                        />
                        <GitHubInfo
                          username={username}
                          repo={result.repo}
                          followers={result.followers}
                          following={result.following}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return content;
}

export default GitHubProfileCard;
