import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
  <div className='bg-slate-100 shadow-sm mt- sticky px-6 py-8 space-y-8 flex flex-row h-screen justify-between'>
  <div class="text-lg space-x-10 space-y-4 p-6 mt-6">
            <h1 className='font-bold ml-10'>INFORMATIONS SUR NOUS</h1>
            <ul className='space-y-2'>
              <li> <Link href='#'>À Propos De Nous</Link></li>
              <li><Link href='#'>Responsabilité Sociale</Link></li>
              <li><Link href='#'>Blogger</Link></li>
              <li><Link href='#'>Réduction</Link></li>
              <li><Link href='#'>Promos</Link></li>
          </ul>  
  </div>

  <div class="text-lg space-x-10 space-y-4 p-6">
            <h1 className='font-bold ml-10'>AIDE</h1>
            <ul className='space-y-2'>
              <li> <Link href='#'>Livraison</Link></li>
              <li><Link href='#'>Remboursement</Link></li>
              <li><Link href='#'>Commande</Link></li>
              <li><Link href='#'>Statut De Commande</Link></li>
          </ul>  
  </div>
 
  <div class="text-lg space-x-10 space-y-4  p-6">
            <h1 className='font-bold ml-10'>CONTACT & PAIEMENT</h1>
            <ul className='space-y-2'>
              <li> <Link href='#'>Nous contacter</Link></li>
              <li><Link href='#'>Paiement</Link></li>
              <li><Link href='#'>Points et Bonus</Link></li>
              <li><Link href='#'>Avis de Rappel</Link></li>
              <li><Link href='#'>Groupe whatsapp</Link></li>
          </ul>  
  </div>
  <div class="text-lg space-x-24 space-y-4  p-6">
            <h1 className='font-bold ml-24'>Trouvez-nous sur</h1>
            <ul class="flex space-x-4 items-center text-center">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
          </ul>
          <p className='text-sm'>Abonnez nous à nos newsletter pour suivre toute l'actualité de myShoes</p>
          <p className='text-sm'>Vous pouvez vous desabonner à tout moment</p>
          <div className='space-x-0 w-full'>
          <input className='w-1/2 h-10 p-2' type='email' placeholder='Entrez votre adresse mail'/><button className='bg-black text-white text-sm p-3 h-10 rounded-xs'>S'abonner</button>
          </div>

          {/* <input type='email'/><button placeholder="S'abonner"></button> */}
  </div>
  
  </div>

  <div className='text-center bg-slate-400'>
    <p>@2023 Tous Droits reservés</p>
  </div>
    </div>
 
  
  )
}

export default Footer