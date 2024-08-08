// import React from 'react'

// export const BefFoot = () => {
//   return (
//     <>
//     <section>
//       <div className='h-96 m-14' style={{backgroundColor:'#1d1d1f', borderRadius:'40px'}}></div>
//     </section>
//     </>
//   )
// }


import React from 'react';

export const BefFoot = () => {
  return (
    <section className="bg-[#1d1d1f] text-white py-16 rounded-[3rem] flex items-center justify-center m-14 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        <div className="flex flex-col items-center md:items-start md:flex-1 mb-8 md:mb-0">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="w-32 h-32 mb-4"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Looking For A Solution That Works?
          </h2>
          <p className="text-lg mb-8">
            Let&apos;s talk about building a custom machine learning or AI solution
          </p>
          <button className="bg-white text-black py-2 px-4 rounded font-semibold hover:bg-gray-200 transition duration-200">
            Contact Us &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
