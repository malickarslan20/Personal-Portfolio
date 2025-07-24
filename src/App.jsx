// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar'; // your responsive Navbar
// import Home from './Pages/Home';
// import About from './Pages/about';
// import Projects from './Pages/projects';
// import Contact from './Pages/contact';

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Always visible */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './Components/Navbar'; // Responsive Navbar
import Home from './Pages/Home';
import About from './Pages/about';
import Projects from './Pages/projects';
import Contact from './Pages/contact';

function App() {
  return (
    <div>
      <Navbar /> {/* Always visible */}
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

