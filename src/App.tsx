// App.js
import './App.css';
import FirstFormCall from './components/FirstFormCall';
import Header from './components/Header';
import BenefitsCard from './components/BenefitsCard';
import ServicesGrid from './components/ServicesGrid';
import SecondFormCall from './components/SecondFormCall';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import News from './components/News';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Transition from './components/Transition';

function App() {
  return (
    <div>
      <Nav />
      <div className="pt-16">
        <Header />
        <main>
          <Transition>
            <FirstFormCall />
          </Transition>
          <Transition>
            <BenefitsCard />
          </Transition>
          <Transition>
            <ServicesGrid />
          </Transition>
          <Transition>
            <SecondFormCall />
          </Transition>
          <Transition>
            <Reviews />
          </Transition>
          <Transition>
            <ContactForm />
          </Transition>
          <Transition>
            <News />
          </Transition>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
