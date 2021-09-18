import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from '../Hero';

const Layout = ({ children }) => {
  return (
    <>
      <section className="h-screen">
        <Header />

        <Hero />
      </section>
      <main className="text-gray-900 text-justify">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
