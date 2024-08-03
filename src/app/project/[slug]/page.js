"use client"

import { supreme, lato,inconsolata, poppins} from '../../styles/fonts';
import { usePathname } from 'next/navigation';
import React from 'react';
import db from '../../../api/db.json'
import Image from 'next/image';
import coworking from '../../../assets/images/coworking.png';
import artfullcode from '../../../assets/images/artfullcode.png';
import portfolio from '../../../assets/images/portfoliov2.png';
import lettres from '../../../assets/images/lettreenlumiere.png'
import {  House } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const images = {
    artfullcode : artfullcode,
    portfoliov2 : portfolio,
    lettreenlumiere : lettres,
    coworking : coworking
  }

  const pathName = usePathname();
  const id = pathName.split('/').pop();
 
  const currentProject = db.projects.find(p => p.id == id);
  const image = images[currentProject.image]


  return (
    <>
      <header className='text-white px-10 py-5 flex justify-between'>
        <p className={`text-4xl font-bold ${supreme.className}`}>
            <span className={`text-green`}>Ma</span>rilyne
        </p>
        <Link href='/' className='flex justify-center items-center gap-1'>
          <House size={20}/>
          <p>Home</p>
        </Link>
      </header>
      <main className='px-5 md:px-20'>
     

        <section className='flex flex-col justify-between gap-14 items-center mt-24 md:flex-row lg:gap-40'>
          <div className='text-white flex flex-col gap-10 justify-center'>
            <h1 className='text-5xl font-bold '>{currentProject.name}</h1>
            <h2 dangerouslySetInnerHTML={{ __html: currentProject.description }} />
            <div className='flex flex-col gap-0'>
              <p>Technos : <span className={`text-green ${inconsolata.className}`}>{currentProject.technos.join(', ')}</span></p>
              <p> Date : <span className={`text-green ${inconsolata.className}`}>{currentProject.date}</span></p>
            </div>

            
          </div>
          <Image 
            src={`${image.src}`}
            alt={`.Bannière de ${currentProject.name}`}
            width={400}
            height={400}
          />
        </section>

        <section className='px-3 flex flex-col gap-10 mt-20 text-white'>
          <h2 className={` text-3xl font-bold ${lato.className}`}>Pourquoi ce projet ?</h2>
          <p className={`md:w-1/2  md:ml-52 ${poppins.className}`}>{currentProject.why}</p>
        </section>

        <section className='px-3 flex flex-col gap-10 mt-20 text-white'>
          <h2 className={` text-3xl font-bold ${lato.className}`}>Les méthodes de réalisation trouvées</h2>
          <p className={`w-1/2 ml-52 ${poppins.className}`} dangerouslySetInnerHTML={{__html: currentProject.methods}}/>
        </section>

        <section className='px-3 flex flex-col gap-10 mt-20 text-white'>
          <h2 className={` text-3xl font-bold ${lato.className}`}>Comment ?</h2>
          <p className={`w-1/2 ml-52 ${poppins.className}`} dangerouslySetInnerHTML={{__html: currentProject.how}} />
        </section>

        <section className='px-3 flex flex-col gap-10 my-20 text-white'>
          <h2 className={` text-3xl font-bold ${lato.className}`}>Mes ressentis pour ce projet</h2>
          <p className={`w-1/2 ml-52 ${poppins.className}`}>{currentProject.feelings}</p>
        </section>
      
      
      </main>
    </>
  );
}

export default Page;
