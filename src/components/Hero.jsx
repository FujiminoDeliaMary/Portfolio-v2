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

        <div className='flex flex-col justify-center items-center md:flex-row md:items-start md:w-3/4 gap-20 mt-24'>

            <div className='flex flex-col gap-3'>
              <h3 className='text-white text-2xl'><FlipWords words={words} className="custom-class"/></h3>
              <p className={` text-secondary ${supreme.className}`}>
              Bonjour, je suis Marilyne Delia, une camerounaise de 18 ans , actuellement en France et étudiant à l&aposuniversité de la rochelle.<br></br><br></br>
              Je suis une développeuse web passionnée par la conception des solutions innovantes, accessibles et responsives  sur le web.<br></br><br></br>

              Je suis passionnée par l&aposapprentissage continu et toujours à la recherche de nouvelles compétences et connaissances pour enrichir mon expertise.

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
