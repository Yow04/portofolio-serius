import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css'

function App() {
  return (
    <div className="max-w-[1040px] mx-auto px-4 py-6">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
