import { Inconsolata, Lato, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts

const lato = Lato({
    weight: ['400', '700'], // spécifiez les poids de police que vous voulez utiliser
    subsets: ['latin'], // ajoutez les subsets ici
    preload: true, // assurez-vous que le préchargement est activé
  }
)
const inconsolata = Inconsolata({
    weight: ['400', '700'], // spécifiez les poids de police que vous voulez utiliser
    subsets: ['latin'], // ajoutez les subsets ici
    preload: true, // assurez-vous que le préchargement est activé
  });

  const poppins = Poppins({
    weight: ['400', '700'], // spécifiez les poids de police que vous voulez utiliser
    subsets: ['latin'], // ajoutez les subsets ici
    preload: true, // assurez-vous que le préchargement est activé
  });
  
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const supreme = localFont({src : '../../assets/fonts/Supreme-Regular.woff'})

const generalSans = localFont({src : '../../assets/fonts/Switzer-Medium.woff'})
 
export {  lato, inconsolata, supreme, generalSans, poppins}