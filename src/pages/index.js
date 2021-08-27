import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import IrccaImage from '../svg/IrccaImage';
import MgapImage from '../svg/MgapImage';
import GerminarImage from '../svg/GerminarImage';
import AniiImage from '../svg/AniiImage';
import KhemImage from '../svg/KhemImage';
import Hero from '../components/Hero';

const Index = () => (
  <Layout>
    
    <section id="hero" className="">
      <Hero/>
      
    </section>
    
    <SplitSection
      id="nosotros"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight text-primary">Quiénes somos</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Fundada en 2017, Germinar es una empresa uruguaya dedicada al cultivo y mejoramiento genético de variedades de cáñamo y cannabis. Incubada en Khem, en el Polo Tecnológico de Pando cuenta con el apoyo de la Agencia Nacional de Investigación e Innovación de Uruguay, en su programa Emprendedores Innovadores Biotecnológicos, durante el período 2017-2020. 

          </p>
        </div>
      }
      secondarySlot={<GerminarImage />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight text-primary">
            Investigación y Desarrollo
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          En 2018, el Instituto de Regulación y Control de Cannabis otorgó a la empresa una licencia para la investigación y desarrollo [I+D] de una variedad nacional de cáñamo. En 2019, el Instituto Nacional de Semillas registró MOCA, la variedad de cáñamo con alto contenido en CBD desarrollada por nuestro equipo.
          </p>
        </div>
      }
      secondarySlot={<IrccaImage />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight text-primary">
            Cultivo y producción
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Germinar ejecuta una licencia de la Dirección General de Servicios Agrícolas del Ministerio de Ganadería Agricultura y Pesca para el cultivo de cáñamo y la producción de semillas feminizadas. Nos especializamos en proveer genética de cáñamo a cultivadores en Uruguay y la región, para usos medicinales e industriales. 

          </p>
        </div>
      }
      secondarySlot={<MgapImage />}
    />
    <section id="apoyos" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Confían en Nosotros</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 flex items-center px-3 m-12">
          <AniiImage />
             
          </div>
          <div className="flex-1 flex items-center px-3 m-12">
          <KhemImage/>
           
          </div>
          <div className="flex-1 px-3">
            
          </div>
          <div className="flex-1 px-3">
            
          </div>
        </div>
      </div>
    </section>
    <section id="moca" className="py-20 lg:py-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">MOCA</h2>

        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="historia" className="py-20 lg:py-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Nuestra Historia</h2>
        
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
