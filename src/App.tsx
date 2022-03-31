/* External dependencies */
import React from 'react';

/* Local dependencies */
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Testimonials from './components/testimonials';

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
