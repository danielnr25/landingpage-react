import React from 'react'

function Banner() {
   return (
      <div className='py-3 mx-auto sm:px-4 sm:pt-10'>
      <h1 className='text-3xl font-bold tracking-wide sm:px-6 sm:leading-none md:text-4xl xl:text-4xl sm:text-3xl'>Alojamientos</h1>
      <div className='relative py-4 px-4 sm:px-6 sm:py-10 grid grid-cols-1'>
        <img src="https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-[490px] object-cover border border-gray-100 rounded-xl shadow-lg' />
        <div className='absolute z-10 inset-0 flex flex-col items-center justify-center rounded-lg text-white py-6 px-8 sm:right-8 sm:top-8 lg:right-24 lg:top-24'>
          <p className='text-xl font-semibold text-center mb-4'>Una nueva sección de alojamiento de lujo</p>
          <a href="" className='bg-gray-300 hover:bg-gray-200 text-indigo-900 font-medium py-2 px-4 rounded-md'>Explorar alojamiento</a>
        </div>
      </div>
    </div>
    
   )
}

export default Banner