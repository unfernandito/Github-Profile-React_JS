import React from 'react'

function GitHubInfo({username, repo, followers, following}) {
    return (
        <div>
            <hr/>
            <div className="row">
                <div className="col-lg-4">
                    <a href={`https://github.com/${username}?tab=repositories`}  target="_blank">
                        <h5 class="pt-1">Repos</h5>
                    </a>
                    <p>{repo}</p>
                </div>
                <div className="col-lg-4">
                    <a href={`https://github.com/${username}?tab=followers`}  target="_blank">
                        <h5 class="pt-1">Followers</h5>
                    </a>
                    <p>{followers}</p>
                </div>
                <div className="col-lg-4">
                    <a href={`https://github.com/${username}?tab=following`}  target="_blank">
                        <h5 class="pt-1">Following</h5>
                    </a>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}

export default GitHubInfo