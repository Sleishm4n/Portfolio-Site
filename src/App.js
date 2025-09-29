import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Cv from './components/Cv';
import Projects from './components/Projects';

function App() {
  return (
    <><Header />
    <br />
    <AboutMe />
    <br />
    <Cv />
    <br />
    <Projects />
    <br />
    <Footer /></>
  );
}

export default App;