import './App.css';
import About from './components/About';
import GetinTouch from './components/GetinTouch';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Studies />
      <Projects />
      <GetinTouch />
      <Footer />
    </>
  );
}

export default App;
