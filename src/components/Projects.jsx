"use client";
import React from 'react';
import { lora, supreme, inconsolata, lato } from '../app/styles/fonts';
import portfoliov2 from '../assets/images/portfoliov2.png';
import portfoliov1 from '../assets/images/portfoliov2.png';
import lettreenlumiere from '../assets/images/lettreenlumiere.png';
import coworking from '../assets/images/9coworking.png';
import artfullcode from '../assets/images/artfullcode.png';
import encyclo from '../assets/images/encyclo.png';

import githubIcon from '../assets/icons/githubIcon.svg';
import linkIcon from '../assets/icons/linkIcon.svg';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      image: portfoliov2,
      titleKey: "portfoliov2",
      title: 'Portfolio v2',
      description: "Portfolio montrant mes réalisations, compétences, et un résumé détaillé de mon parcours professionnel",
      githubLink: 'https://github.com/FujiminoDeliaMary/Portfolio-2024',
      link: 'https://mtsene.lpmiaw.univ-lr.fr/portfolio/',
      technos: ['#NextJs', '#Tailwind', '#Framer Motion', "coffee"],
      important: true
    },
    {
      image: portfoliov1,
      titleKey: "portfoliov1",
      title: 'Portfolio v1',
      githubLink: 'https://github.com/FujiminoDeliaMary/Portfolio-2024',
      description: "Portfolio montrant mes réalisations, compétences, et un résumé détaillé de mon parcours professionnel",
      link: 'https://mtsene.lpmiaw.univ-lr.fr/portfolio/',
      technos: ['#ReactJs', '#Scss', '#Framer Motion', '#i18next', "coffee"],
      important: false
    },
    {
      image: coworking,
      titleKey: "9coworking",
      title: '9Coworking',
      githubLink: '/',
      link: '/',
      technos: ['#ReactJs', '#Scss', '#Redux', "#Symfony", "coffee"],
      description: "Back end pour un espace de coworking permettant la gestion des espaces de travail salles de réunion et des forfaits pris par les différents coworking",
      important: true
    },
    {
      image: artfullcode,
      titleKey: "",
      title: 'Artfull Code',
      githubLink: 'https://github.com/FujiminoDeliaMary/ArtfullCode',
      link: 'https://agence-artfull-code.lpmiaw.univ-lr.fr/',
      description: "Entreprise fictive représentant une jeune agence web à la rochelle dans le cadre de projets tutorés.",
      technos: ['#ReactJs', '#Scss', "coffee"],
      important: true
    },
    {
      image: lettreenlumiere,
      titleKey: "lettresEnLumiere",
      title: 'Lettres en lumière',
      description: "Logiciel servant à l'alphabétisation de personnes en situation particulières comme des prisonniers illétrés, analphabètes ou allophones",
      githubLink: '/',
      link: 'https://mtsene.lpmiaw.univ-lr.fr/lettrelumierefront/',
      technos: ['#ReactJs', '#Scss', '#Framer Motion', '#Symfony', "coffee"],
      important: true
    },
    {
      image: encyclo,
      titleKey: "encyclo",
      title: 'Encyclopédie Cinéma',
      description: "Site dédié à la recherche de films, séries et autres...",
      githubLink: '/',
      link: 'https://mtsene.lpmiaw.univ-lr.fr/lettrelumierefront/',
      technos: ['#VueJs', '#Scss', "Strapi", "coffee"],
      important: true
    }
  ];

  return (
    <section className='bg-background text-white py-10 px-6 md:px-20' id='projects'>
      <h2 className={`text-2xl font-bold ${lato.className} `}>
        <span className={` text-green ${inconsolata.className}`}>03.</span>
        Quelques uns de mes projets
      </h2>
      <div className=" pt-20 flex flex-col gap-32">
        {projects.map((project, index) => (
          <div className={`flex flex-col items-center justify-center gap-8 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} key={index}>
            <div className={`relative w-full md:w-3/4 flex flex-col md:flex-row gap-6 md:gap-14 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} >
              <Image
                src={project.image}
                alt={project.titleKey}
                className="object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex flex-col gap-6 bg-background bg-opacity-80 md:bg-none md:relative md:bg-transparent p-4 md:p-0">
                <h3 className={`text-green text-2xl font-semibold ${supreme.className}`}>{`${project.title}`}</h3>
                <p className={`overflow-hidden text-ellipsis ${inconsolata.className}`}>{`${project.description}`}</p>
                <p className={`text-green ${lato.className}`}>{project.technos.join(', ')}</p>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={linkIcon}
                      alt='Go to site'
                      className='hover:fill-green'
                    />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={githubIcon}
                      alt='Go to github'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
