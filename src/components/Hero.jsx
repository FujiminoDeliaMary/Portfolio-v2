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
              <p className={`text-secondary text-md ${supreme.className}`}>
                Le monde du numérique m'a toujours fascinée mais je ne voulais pas juste l'utiliser, je voulais <strong className='text-green font-normal'>en faire partie</strong>. Créer, concevoir, <strong className='text-green font-normal'>résoudre des problèmes concrets avec des solutions techniques efficaces</strong> : c'est ce qui me fait me lever le matin.

                Développeuse <strong className='text-green font-normal'>Full Stack</strong> avec des appétences en <strong className='text-green font-normal'>Data Science et IA</strong>, je me suis formée à <strong className='text-green font-normal'>l'Université de La Rochelle</strong> puis à <strong className='text-green font-normal'>EPSI Nantes</strong>, où je consolide aujourd'hui mon expertise en alternance chez <strong className='text-green font-normal'>CGI</strong>.

                Curieuse par nature, motivée par les défis et <strong className='text-green font-normal'>passionnée par mon métier</strong>, je cherche constamment à progresser et à avoir un impact réel sur les projets que je touche.

                Mon ambition ? Intégrer une <strong className='text-green font-normal'>entreprise qui met l'humain au coeur de ses actions</strong>, où je pourrai mettre mes compétences au service de projets ambitieux et continuer à grandir.
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
