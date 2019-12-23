import React from 'react'

function GitHubImage({url}){
    return (
        <div className="card-up">
            <img src={url != null ? url : require('../../assets/computer.jpg')} className="img-fluid"/>
        </div>
    )
}

export default GitHubImage
