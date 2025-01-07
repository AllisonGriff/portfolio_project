import React from 'react'
import "./ProjectCard.css"
const ProjectCard = (props) => {

    return (
        <div className="ProjectCard">
            <h2>{props.title}</h2>
            <p> {props.desc} </p>
            <img src={props.image} /></div>
    )
}

export default ProjectCard