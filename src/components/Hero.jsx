import React from 'react';
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts';
import Image from 'next/image';
import { FlipWords } from "../components/ui/filp-words";

const Hero = () => {

  const words = ["Développeuse Wordpress", "Développeur Front-end", "Développeur Back-end", "Coffee Lover", "Music Lover"]
  return (
    <section className='bg-background text-white px-5 py-10 md:pl-20' id='apropos'>
        <h2 className={`text-xl font-bold ${lato.className} `}>
            <span className={` text-green ${inconsolata.className}`}>01.</span>
            Plus à propos de moi ...

        </h2>

        <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:w-3/4 gap-20 mt-24'>

            <div className='flex flex-col gap-3'>
              <h3 className='text-white text-2xl'><FlipWords words={words} className="custom-class"/></h3>
              <p className={` text-secondary text-md ${supreme.className}`}>
              Bonjour, je suis <strong className='text-green font-normal'>Marilyne Tsene</strong>, une camerounaise de 18 ans , actuellement en France et étudiant le <strong className='text-green font-normal'>développement web</strong> à <strong className='text-green font-normal'>l&apos;université de la rochelle</strong>. Je suis passionée par la musique , les mangas, le cinéma, stack overflow et l&apos;univers du développement web.<br></br><br></br>
              Amoureuse de la <strong className='text-green font-normal'>conception des solutions innovantes</strong> , accessibles et responsives  sur le web, je suis venue du Gabon après avoir obtenu un <strong className='text-green font-normal'>BTS d&apos;analyste programmeur</strong>  qui m&apos;a donner les bases en réseau, en mathématiques appliquées, architectures des ordinateurs, programmation, et bien d&apos;autres...<br></br><br></br>

              Toujours enthousiaste à l&apos;idée d&apos;apprendre et de me perfectionner, je suis constamment à la recherche de nouvelles compétences et de connaissances pour enrichir mon expertise. Je suis également motivé par la possibilité de travailler avec de nouvelles équipes, ce qui me permet de m&apos;améliorer continuellement et d&apos;apporter des perspectives fraîches et innovantes.

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
