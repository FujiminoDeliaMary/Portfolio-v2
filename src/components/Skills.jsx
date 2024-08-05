import React from 'react'
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts'
import { HoverEffect } from './ui/card-hover-effect';

const Skills = () => {
    const skills = {
        Langages : ["HTML", "CSS/Sass", "JavaScript", "SQL", "Php", "C#, Java", "TypeScript"],
        Frameworks: ["Symfony", "Express", "VueJs", "React", "NextJs"],
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
  

    // <section className='bg-background text-white py-10 px-20' id='skills'>
    //     <h2 className={`text-2xl font-bold ${lato.className} `}>
    //         <span className={` text-green ${inconsolata.className}`}>02.</span> Mes compétences
    //     </h2>
    //     <div className="flex flex-wrap justify-between gap-6 pt-20">
    //     {Object.keys(skills).map((category) => (
    //       <div key={category} className=" rounded-lg shadow p-4 w-fit">
    //         <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
    //         <ul className="list-disc list-inside">
    //           {skills[category].map((skill) => (
    //             <li key={skill} className={`list-none text-secondary ${supreme.className}`}>{skill}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  )
}

export default Skills
