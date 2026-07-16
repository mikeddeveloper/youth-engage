import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import Personalities from '../components/Personalities';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Personalities />
      <Team />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </>
  );
}
