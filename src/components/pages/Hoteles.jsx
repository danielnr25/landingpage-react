import React from 'react'
const hospedajes = {
   one: [
      {
         img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Casa completa - 4 huéspedes',
         description: 'Casa completa con todos los servicios',
         price: '$2550 por noche'
      }
   ],
   two: [
      {
         img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Cuarto privado - 2 huéspedes',
         description: 'Cuarto privado con todos los servicios',
         price: '$2200 por noche'
      }
   ],
   three: [
      {
         img: 'https://images.pexels.com/photos/6454837/pexels-photo-6454837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Cuarto privado - 4 huéspedes',
         description: 'Cuarto privado con todos los servicios y desayuno',
         price: '$2050 por noche'
      }
   ],
   four: [
      {
         img: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Cuarto privado - 2 huéspedes',
         description: 'Cuarto privado con todos los servicios y desayuno',
         price: '$2300 por noche'
      }
   ]
}
function Hoteles() {
   return (
      <div className='py-3 mx-auto sm:px-4 sm:py-10'>
         <h1 className='text-3xl font-bold tracking-wide sm:px-6 sm:leading-none md:text-4xl xl:text-4xl sm:text-3xl'>Hospedaje</h1>
         <div className='grid grid-cols-3 gap-4 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:py-5 sm:px-10 cursor-pointer transition-all duration-300  ease-out'>
            <div className='flex-col hover:bg-gray-200  border rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {hospedajes.one.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-56 rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>
               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {hospedajes.two.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-56 rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>

               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {hospedajes.three.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='h-56 w-full rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>

               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {hospedajes.four.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-56 rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Hoteles