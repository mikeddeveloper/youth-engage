import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import Personalities from '../components/Personalities';
import ImpactMoments from '../components/ImpactMoments';
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
      <ImpactMoments />
      <Team />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </>
  );
}
