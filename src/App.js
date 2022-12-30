/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import About from './components/About';
import CareerAndEducation from './components/CareerAndEducation';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './App.css';

// const smoothScroll = () => {
//   const triggers = document.querySelectorAll('.smoothscroll');

//   triggers.forEach((trigger) => {
//     trigger.addEventListener('click', () => {
//       const target = trigger.getAttribute('href');

//       Jump(target, {
//         duration: 1200,
//       });
//     });
//   });
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Navbar />
          <Home />
          <About />
          <CareerAndEducation />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </header>
    </div>
  );
}

export default App;
