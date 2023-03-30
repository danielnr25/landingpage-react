import React from 'react'

const country = {
   francia: [
      {
         name: 'Francia - Paris',
         img: 'https://images.pexels.com/photos/3671671/pexels-photo-3671671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
   ],
   italia: [
      {
         name: 'Italia - Roma',
         img: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
   ],
   grecia:[
      {
         name: 'Grecia - Atenas',
         img: 'https://images.pexels.com/photos/772686/pexels-photo-772686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
   ]
}
function Country() {
   return (
      <div className='py-3 mx-auto sm:px-4 sm:py-10'>
         <h1 className='text-3xl font-bold tracking-wide sm:px-6 sm:leading-none md:text-4xl xl:text-4xl sm:text-3xl'>Destinos populares</h1>
         <div className='grid grid-cols-3 gap-4 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:py-5 sm:px-10 cursor-pointer transition-all duration-300  ease-out'>
            <div className='flex-col hover:bg-gray-200  border rounded-2xl space-y-2 space-x-4 shadow-xl'>
               {country.italia.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-64 rounded-t-lg object-cover' />
                     <p className='text-base uppercase text-center items-center font-semibold'>{item.name}</p>
                  </div>
               ))}
            </div>
            <div className='flex-col hover:bg-gray-200  border rounded-2xl space-y-2 space-x-4 shadow-xl'>
               {country.francia.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-64 rounded-t-lg object-cover' />
                     <p className='text-base uppercase text-center items-center font-semibold'>{item.name}</p>
                  </div>
               ))}
            </div>
            <div className='flex-col hover:bg-gray-200  border rounded-2xl space-y-2 space-x-4 shadow-xl'>
               {country.grecia.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-64 rounded-t-lg object-cover' />
                     <p className='text-base uppercase text-center items-center font-semibold'>{item.name}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Country