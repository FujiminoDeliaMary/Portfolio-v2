import React from 'react'
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts'
import { HoverEffect } from './ui/card-hover-effect';

const Skills = () => {
    const skills = {
        Langages : ["HTML", "CSS/Sass", "JavaScript", "SQL", "R", "Python", "Java", "TypeScript"],
        Frameworks: ["Symfony", "Express", "VueJs", "React", "NextJs", "Prisma"],
        Design : ["Figma", "Adobe", "Photoshop", "InDesign", "Prototypes", "Wireframes"],
        Outils: ["Git, Github, Gitlab", "Redux", "Docker", "NPM", "Bash", "SEO", "Gitlab CI/CD"],
        Cms : ["Wordpress", "Strapi"]
      };
  return (

      <section className=" bg-background text-white py-10 px-20" id='skills'>
        <h2 className={`text-2xl font-bold ${lato.className} `}>
            <span className={` text-green ${inconsolata.className}`}>02.</span> Mes compétences
         </h2>
        <HoverEffect items={skills} />
      </section>
  

  )
}

export default Skills
