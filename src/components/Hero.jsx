import React from 'react';
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts';
import Image from 'next/image';
import { FlipWords } from "../components/ui/filp-words";

const Hero = () => {

  const words = ["AI Engineer", "Développeur Front-end", "Développeur Back-end", "Book Lover", "Music Lover", "Data Scientist"]
  return (
    <section className='bg-background text-white px-5 py-10 md:pl-20' id='apropos'>
        <h2 className={`text-xl font-bold ${lato.className} `}>
            <span className={` text-green ${inconsolata.className}`}>01.</span>
            Plus à propos de moi ...
        </h2>

        <div className='flex flex-col justify-between items-center lg:flex-row lg:items-start gap-20 pr-10 mt-24'>

            <div className='flex flex-col gap-3'>
              <h3 className='text-white text-2xl pb-5'><FlipWords words={words} className="custom-class"/></h3>
              <p className={` text-secondary text-md ${supreme.className}`}>
              Bonjour, je suis <strong className='text-green font-normal'>Marilyne Tsene</strong>, développeuse FullStack avec des appétences en data science spécialisée en développement logiciel et intelligence artificielle.

              Formée à <strong className='text-green font-normal'>l’Université de La Rochelle</strong> puis actuellement en fin de formation à <strong className='text-green font-normal'>EPSI Nantes</strong>, je consolide aujourd’hui mon expertise à travers une alternance en cours à <strong className='text-green font-normal'>CGI</strong>.

              Passionnée par la conception de <strong className='text-green font-normal'>solutions innovantes, performantes et sécurisées</strong>, j’interviens sur le développement d’applications web, l’architecture logicielle, la gestion de projet, la sécurité ainsi que sur des projets intégrant la data et l’intelligence artificielle.

              Titulaire d’un <strong className='text-green font-normal'>BTS Analyste Programmeur</strong>, j’ai acquis de solides bases en réseaux, architectures systèmes, programmation et mathématiques appliquées.

              Curieuse, rigoureuse et enthousiaste, j’ai hâte de découvrir de nouvelles aventures professionnelles et de contribuer à des projets à forte valeur ajoutée.
              </p>
            
            </div>
            <Image 
                  className='border-4 rounded-md border-green'
                  src={"/images/profil.jpg"}
                  alt= "Profil de marilyne"
                  height={300}
                  width={350}
                  objectFit="cover"
                  quality={100}
              />
       
        </div>
    </section>
  )
}

export default Hero
