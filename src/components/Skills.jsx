import React from 'react'
import { inconsolata, lato } from '../app/styles/fonts'
import { HoverEffect } from './ui/card-hover-effect';

const Skills = () => {
    const skills = {
      Langages: [
        { name: "HTML", level: 3 },
        { name: "CSS/Sass", level: 2 },
        { name: "JavaScript", level: 3 },
        { name: "Sql (PostgreSql, MySql, NoSql)", level: 2 },
        { name: "R", level: 2 },
        { name: "Python", level: 2 },
        { name: "Java", level: 3 },
        { name: "TypeScript", level: 2 },
      ],
      Frameworks: [
        { name: "Symfony", level: 2 },
        { name: "Spring Boot", level: 3 },
        { name: "JUnit", level: 2 },
        { name: "Hibernate", level: 2 },
        { name: "VueJs", level: 2 },
        { name: "React", level: 3 },
        { name: "NextJs", level: 3 },
        { name: "Prisma", level: 2 },
        { name: "Scrum", level: 2 },
      ],
      "Surveillance et Observabilité": [
        { name: "Grafana", level: 2 },
        { name: "Prometheus", level: 2 },
        { name: "ELK Stack (Kibana)", level: 2 },
      ],
      "Architecture et Cloud": [
        { name: "AWS (EC2, S3, Lambda)", level: 2 },
        { name: "Docker", level: 3 },
        { name: "Kubernetes", level: 2 },
        { name: "CI/CD", level: 3 },
        { name: "microservices", level: 2 },
        { name: "REST API", level: 3 },
        { name: "architecture orientée événements", level: 1 },
      ],
      Outils: [
        { name: "Env Linux", level: 2 },
        { name: "PhpStorm", level: 2 },
        { name: "SEO", level: 1 },
        { name: "Rabbit Mq", level: 2 },
        { name: "Maven", level: 2 },
        { name: "Tomcat", level: 3 },
      ],
      Cms: [
        { name: "Wordpress", level: 2 },
        { name: "Strapi", level: 1 },
      ],
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
