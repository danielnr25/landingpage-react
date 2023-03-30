import React from 'react'

function Navbar() {
   return (
      <nav className='flex items-center w-full h-24 select-none'>
         <header className='relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center'>
            <a href="#" className='w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0'>
               <span className='text-3xl font-bold uppercase bg-gray-100 text-black ml-1 p-1 rounded-lg'>Vudera</span>
            </a>
            <div className='fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-xl lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex'>
               <div className='flex-col w-full h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto justify-between'>
                  <div className='flex flex-col items-center justify-center h-full mt-12 text-center md:mt-0 md:flex-row md:items-center w-2/3'>
                     <a href="" className='inline-block px-4 py-2 mx-2 font-semibold text-base text-left text-black/80 md:px-0 lg:mx-3 md:text-center uppercase hover:text-indigo-600'>Vender</a>
                     <a href="" className='inline-block px-4 py-2 mx-2  font-medium text-base text-left text-black/80 md:px-0 lg:mx-3 md:text-center uppercase hover:text-indigo-600'>Ayuda</a>
                     <a href="" className='inline-block px-4 py-2 mx-2  font-medium text-base text-left text-black/80 md:px-0 lg:mx-3 md:text-center uppercase hover:text-indigo-600'>Registro</a>
                     <a href="" className='inline-block px-4 py-2 mx-2  font-medium text-base text-left text-black/80 md:px-0 lg:mx-3 md:text-center uppercase hover:text-indigo-600'>Iniciar</a>
                  </div>
                  <div className="flex flex-col items-center justify-end w-1/3 h-full pt-4 md:flex-row md:py-0">
                     <a href="https://github.com/danielnr25" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 gap-x-2 text-xs leading-6 whitespace-no-wrap transition font-bold duration-150 ease-in-out rounded-3xl  lg:text-base xl:text-lg text-black bg-gray-100 hover:bg-gray-200 focus:border-gray-200  active:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
            <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-800 hover:bg-opacity-10 text-black">
               <div className="w-6 h-1 mt-1 bg-black rounded-full">
               </div>
               <div className="w-6 h-1 mt-1 bg-black rounded-full">
               </div>
               <div className="w-6 h-1 mt-1 bg-black rounded-full">
               </div>
            </div>
         </header>
      </nav>
   )
}

export default Navbar