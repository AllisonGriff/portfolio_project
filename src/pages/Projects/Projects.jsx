import React, { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import "./Projects.css"

const Projects = () => {

    const [cards, setcards] = useState([
        {
            title: "titleaaray",
            desc: "descriptionarray",
            image: "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
        },
        {
            title: "titleaaray2",
            desc: "descriptionarray2",
            image: "https://media.4-paws.org/a/8/c/6/a8c65bcf754e357cf23aca8bf4dc69d58b376ec1/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.webp"
        },
        {
            title: "titleaaray2",
            desc: "descriptionarray2",
            image: "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_square.jpg"
        }


    ])

    return (
        <div className="ProjectCards_Container">
            {cards.map((item) => {
                console.log(item)
                return (
                    <ProjectCard title={item.title} desc={item.title} image={item.image}/>
                )
            })}


        </div>
    )
}

export default Projects