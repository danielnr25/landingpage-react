import React from 'react'

function Hero() {
   return (
      <div className='py-4 mx-auto text-center sm:px-4 sm:py-10'>
         <h1 className='font-bold text-3xl leading-10 tracking-wide sm:text-3xl sm:leading-none md:text-4xl xl:text-4xl'>Encuentra hospedajes para tus proximas vacaciones</h1>
         <div className='max-w-lg mx-auto mt-6 text-sm text-center text-neutral-900/80 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl'>
            <div className='relative items-center flex max-w-xl mt-6 text-center'>
               <input className='border border-black w-full h-12 overflow-hidden px-6 py-2 font-medium text-indigo-800 focus:outline-none rounded-l-xl bg-white/90 focus:bg-white focus:border-indigo-700' type="text" name="" id="" placeholder='New York, Londres, Roma' />
               <button className='inline-flex items-center w-40 h-12 px-8 text-base font-bold leading-6 text-white bg-black border border-transparent transition duration-150 ease-in-out hover:bg-indigo-700 focus:outline-none active:bg-indigo-700 justify-center rounded-r-xl'>Buscar</button>
            </div>
         </div>
      </div>
   )
}

export default Hero