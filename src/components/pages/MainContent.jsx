import React from 'react'

const card = {
   concierto: [
      {
         img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Concierto',
         description: 'Descubre lugares increíbles para hospedarte',
         price: '$300 por persona'
      }
   ],
   teatro: [
      {
         img: 'https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Teatro',
         description: 'Descubre lugares increíbles para hospedarte',
         price: '$300 por persona'
      }
   ],
   paseo: [
      {
         img: 'https://images.pexels.com/photos/14064032/pexels-photo-14064032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Paseo',
         description: 'Descubre lugares increíbles para hospedarte',
         price: '$300 por persona'
      }
   ],
   deporte: [
      {
         img: 'https://images.pexels.com/photos/8980690/pexels-photo-8980690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         title: 'Deporte',
         description: 'Descubre lugares increíbles para hospedarte',
         price: '$300 por persona'
      }
   ]
}

function MainContent() {
   return (
      <div className='py-4 sm:px-4 mx-auto sm:py-10'>
         <h1 className='text-3xl font-bold tracking-wide sm:text-3xl sm:leading-none md:text-4xl xl:text-4xl sm:px-6'>Qué podemos hacer?</h1>
         <div className='grid grid-cols-3 gap-4 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:py-5 sm:px-10 cursor-pointer transition-all duration-300  ease-out'>
            <div className='flex-col hover:bg-gray-200  border rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {card.concierto.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-56 rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>
               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {card.teatro.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='w-full h-56 rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>

               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {card.paseo.map((item) => (
                  <div key={item.name} className='border-2 border-gray-50 rounded-2xl space-y-2 space-x-4 pb-3 shadow-xl'>
                     <img src={item.img} alt="" className='h-56 w-full rounded-t-lg object-cover' />
                     <p className='text-indigo-900 font-semibold text-base uppercase'>{item.title}</p>
                     <p className='text-sm tracking-wide'>{item.description}</p>
                     <p className='text-sm font-medium'>{item.price}</p>
                  </div>

               ))}
            </div>
            <div className='flex-col hover:bg-gray-200 border-2 rounded-2xl space-y-2 space-x-4 shadow-xl '>
               {card.deporte.map((item) => (
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

export default MainContent