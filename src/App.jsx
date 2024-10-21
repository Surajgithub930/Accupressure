// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Services from './components/Services';
// import About from './components/About';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <Services />
//       <About />
//       <Testimonials />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
// import Slider from './components/Slider';



function App() {
  return (
    <div>
      <Navbar />
      {/* <Slider/> */}
      <Outlet/>
      <Footer />
    </div>
  )
}


export default App;
