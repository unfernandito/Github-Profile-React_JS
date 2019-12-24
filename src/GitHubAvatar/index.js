import React from "react";

function GitHubAvatar({ avatar, username }) {
  return (
    <div className="avatar">
      <a href={`https://github.com/${username}`} target="_blank">
        <img src={avatar} className="rounded-circle img-responsive" />
      </a>
    </div>
  );
}

export default GitHubAvatar;
