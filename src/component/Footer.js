import React from 'react'

const Footer = () => {
  return (
    <div>
  <div className='bg-slate-100 shadow-sm mt- sticky px-6 py-8 space-y-8 flex flex-row h-screen justify-between'>
  <div class="text-lg space-x-10 space-y-4 p-6 mt-6">
            <h1 className='font-bold ml-10'>INFORMATIONS SUR NOUS</h1>
            <ul className='space-y-2'>
              <li> <a href='#'>À Propos De Nous</a></li>
              <li><a href='#'>Responsabilité Sociale</a></li>
              <li><a href='#'>Blogger</a></li>
              <li><a href='#'>Réduction</a></li>
              <li><a href='#'>Promos</a></li>
          </ul>  
  </div>

  <div class="text-lg space-x-10 space-y-4 p-6">
            <h1 className='font-bold ml-10'>AIDE</h1>
            <ul className='space-y-2'>
              <li> <a href='#'>Livraison</a></li>
              <li><a href='#'>Remboursement</a></li>
              <li><a href='#'>Commande</a></li>
              <li><a href='#'>Statut De Commande</a></li>
          </ul>  
  </div>
 
  <div class="text-lg space-x-10 space-y-4  p-6">
            <h1 className='font-bold ml-10'>CONTACT & PAIEMENT</h1>
            <ul className='space-y-2'>
              <li> <a href='#'>Nous contacter</a></li>
              <li><a href='#'>Paiement</a></li>
              <li><a href='#'>Points et Bonus</a></li>
              <li><a href='#'>Avis de Rappel</a></li>
              <li><a href='#'>Groupe whatsapp</a></li>
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