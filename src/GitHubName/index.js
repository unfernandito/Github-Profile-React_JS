import React from "react";

function GitHubName({ username, name, location, company }) {
  return (
    <div>
      <a href={`https://github.com/${username}`} target="_blank">
        <h4 id="username">{name}</h4>
      </a>
      <p id="city">{location}</p>
      <p id="company">{company}</p>
    </div>
  );
}

export default GitHubName;
