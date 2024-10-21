import React from 'react';
import Slider from './Slider';

function Home() {
    // Step 1: Define an array of objects with image URLs and text
    const data = [
        { image: 'https://i.pinimg.com/236x/2d/88/31/2d8831b60c1998069b842c5e52a249f3.jpg', text: 'Lorem ipsum dolor sit amet consect ', text1: 'This i para1' },
        { image: 'https://i.pinimg.com/enabled_hi/236x/9d/b8/37/9db83764f7db347c90f65fc3c85b4578.jpg', text: 'Rahul', text1: 'This i para2 ' },
        { image: 'https://i.pinimg.com/enabled_hi/236x/27/22/a1/2722a15b0d264ce728dc38a5dadb76b4.jpg', text: 'Box 3', text1: 'This i para3' },
        { image: 'https://i.pinimg.com/236x/ff/84/d7/ff84d749fe1f363d801dba65cef0a6dd.jpg', text: 'Box 4', text1: 'This i para4' },
        { image: 'https://i.pinimg.com/236x/11/b8/b7/11b8b74df912e6589f76f71f91627352.jpg', text: 'Box 5', text1: 'This i para5' },
        { image: 'https://i.pinimg.com/236x/e4/a1/6f/e4a16fb0b1f06deeab45f442b8b22ce3.jpg', text: 'Box 6', text1: 'This i para6' },
        { image: 'https://i.pinimg.com/236x/a8/d4/4d/a8d44d1f7c7b8d3d666cbe21d68ddb9c.jpg', text: 'Box 7', text1: 'This i para7' },
        { image: 'https://i.pinimg.com/236x/fb/24/23/fb242384ca17881881039f22738f27a8.jpg', text: 'Box 8', text1: 'This i para8' },
        { image: 'https://i.pinimg.com/236x/86/22/65/8622658e61932751591af9f077e1977d.jpg', text: 'Box 9', text1: 'This i para9' },
        { image: 'https://i.pinimg.com/474x/e1/25/00/e12500f84493d83d8f3a0c9e150de0c1.jpg', text: 'Box 10', text1: 'This i para10' },
        { image: 'https://i.pinimg.com/736x/5a/67/5e/5a675e53133c814a1fa1754a3faba026.jpg', text: 'Box 11', text1: 'This i para11' },
        { image: 'https://i.pinimg.com/736x/ef/ab/71/efab71e3d613096f57ed9af20e2be98a.jpg', text: 'Box 12', text1: 'This i para12' },
    ];

    return (
        <>
            <Slider />
            <div className="container mx-auto  ">
                <h2 className="text-[30px] font-bold mt-10 text-center"> Relax Your Body</h2>
                <div className="grid grid-cols-1 p-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                    {/* Step 2: Loop through data array to create 12 boxes */}

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="border hover:border-2 rounded-lg p-4 flex flex-col items-center bg-white overflow-hidden transform transition duration-500 hover:shadow-2xl"
                        >
                            <img
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-[250px] mb-2  rounded-lg transition duration-500 hover:opacity-80 hover:scale-105 "

                            />

                            <h3 className="text-lg font-medium text-center">{item.text1}</h3>
                            <p className="text-sm font-medium text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;


