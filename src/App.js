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
    <div className = "body">
    <AboutMe />
    <br />
    <Cv />
    <br />
    <Projects />
    <br />
    <Footer />
    </div>
    </>
  );
}

export default App;