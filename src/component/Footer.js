import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 px-6 mt-20 py-8 space-y-8 flex-col font-bold flex items-center'>
    {/* <img src="../../assets/images/logo.png" class="lg:w-52 md:w-44 w-64" alt="logo"> */}
  <div class="bg-slate-900 md:h-40"></div>
  <div class="flex flex-row text-lg space-x-8">
            <h1>INFORMATIONS SUR L'ENTREPRISE</h1>
            <a href='#'>À Propos De Nous</a>
            <a href='#'>Responsabilité Sociale</a>
            <a href='#'>Blogger</a>
            <a href='#'>Réduction</a>
            <a href='#'></a>
  
      <ul class="space-y-2">
        <li>Blog</li>
        <li>Démo</li>
        <li>Aide</li>
    </ul>
  </div>
  <div class="bg-slate-900"></div>
  <div class="flex flex-col text-base space-y-4">
    <h3>Rejoignez notre newsletter</h3>
    <div class="mb-2 flex flex-row space-x-2">
      <input class="bg-slate-900bg-opacity-20 rounded-md text-sm focus:outline-none px-4 w-30" type="email" value="Email" required />
      <button class="bg-white p-2 px-4 text-sm rounded-md" type="submit">Valider</button>
    </div>
    <ul class="flex space-x-4 items-center text-center">
      {/* <li><img src="../../assets/images/icons/Facebook.png" alt="Facebook icon" class="md:w-6 w-8"></li>
      <li><img src="../../assets/images/icons/X.png" alt="X icon" class="md:w-6 w-8"></li>
      <li><img src="../../assets/images/icons/Instagram.png" alt="Instagram icon" class="md:w-6 w-8"></li>
      <li><img src="../../assets/images/icons/Linkedin.png" alt="Linkedin icon" class="md:w-6 w-8"></li>
      <li><img src="../../assets/images/icons/Youtube.png" alt="Youtube icon" class="md:w-6 w-8"></li> */}
    </ul>
  </div>
    </div>
  )
}

export default Footer