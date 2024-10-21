

import React from 'react';


function Services() {
  // Step 1: Define an array of objects with image URLs and text
  const data = [
    { image: 'https://i.pinimg.com/236x/2d/88/31/2d8831b60c1998069b842c5e52a249f3.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents.  ', text1: 'Service 1' },

    { image: 'https://i.pinimg.com/enabled_hi/236x/9d/b8/37/9db83764f7db347c90f65fc3c85b4578.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 2 ' },

    { image: 'https://i.pinimg.com/enabled_hi/236x/27/22/a1/2722a15b0d264ce728dc38a5dadb76b4.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 3' },

    { image: 'https://i.pinimg.com/236x/ff/84/d7/ff84d749fe1f363d801dba65cef0a6dd.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 4' },

    { image: 'https://i.pinimg.com/236x/11/b8/b7/11b8b74df912e6589f76f71f91627352.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 5' },

    { image: 'https://i.pinimg.com/236x/e4/a1/6f/e4a16fb0b1f06deeab45f442b8b22ce3.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 6' },

    { image: 'https://i.pinimg.com/236x/a8/d4/4d/a8d44d1f7c7b8d3d666cbe21d68ddb9c.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 7' },

    { image: 'https://i.pinimg.com/236x/fb/24/23/fb242384ca17881881039f22738f27a8.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 8' },

    { image: 'https://i.pinimg.com/236x/86/22/65/8622658e61932751591af9f077e1977d.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 9' },

    { image: 'https://i.pinimg.com/474x/e1/25/00/e12500f84493d83d8f3a0c9e150de0c1.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 10' },
    
    { image: 'https://i.pinimg.com/736x/5a/67/5e/5a675e53133c814a1fa1754a3faba026.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 11' },

    { image: 'https://i.pinimg.com/736x/ef/ab/71/efab71e3d613096f57ed9af20e2be98a.jpg', text: 'Are you looking for a rehab center in Jamaica, Queens, NY? Highland Care Center is the best rehab center in Queens, NY. We offer top-quality services to our residents. ', text1: 'Service 12' },
  ];

  return (
    <div className="container mx-auto  ">
     
      <h2 className="text-[30px] font-bold mt-10 text-center"> Our Services</h2>
      <div className="grid grid-cols-1 p-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {/* Step 2: Loop through data array to create 12 boxes */}

        {/* overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl */}
        {data.map((item, index) => (
          <div
            key={index}
            className="border hover:border-2 rounded-lg p-4 flex flex-col items-center bg-white overflow-hidden transform transition duration-500 hover:shadow-2xl"
          // className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="w-full h-[250px] mb-2  rounded-lg transition duration-500 hover:opacity-80 hover:scale-105 "

            />

            <h3 className="text-lg font-medium text-center">{item.text1}</h3>
            {/* <p className="text-lg font-medium text-center">{item.text}</p> */}
            <p className="text-sm font-medium text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;


