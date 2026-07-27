import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Stats />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
