import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import AniiImage from '../svg/AniiImage';
import FamiliaImage from '../svg/FamiliaImage';
import IrccaImage from '../svg/IrccaImage';
import KhemImage from '../svg/KhemImage';
import MgapImage from '../svg/MgapImage';
import MocaImage from '../svg/MocaImage';
import TrajeImage from '../svg/TrajeImage';

const Index = () => (
  <Layout>
    <div id="nosotros" className="pt-32">
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight text-primary">Quiénes somos</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Fundada en 2017, Germinar es una empresa uruguaya dedicada al cultivo y mejoramiento
              genético de variedades de cáñamo y cannabis. Incubada en Khem, en el Polo Tecnológico
              de Pando cuenta con el apoyo de la Agencia Nacional de Investigación e Innovación de
              Uruguay, en su programa Emprendedores Innovadores Biotecnológicos, durante el período
              2017-2020.
            </p>
          </div>
        }
        secondarySlot={<TrajeImage />}
      />
    </div>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight text-primary">
            Investigación y Desarrollo
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            En 2018, el Instituto de Regulación y Control de Cannabis otorgó a la empresa una
            licencia para la investigación y desarrollo [I+D] de una variedad nacional de cáñamo. En
            2019, el Instituto Nacional de Semillas registró MOCA, la variedad de cáñamo con alto
            contenido en CBD desarrollada por nuestro equipo.
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
            Germinar ejecuta una licencia de la Dirección General de Servicios Agrícolas del
            Ministerio de Ganadería Agricultura y Pesca para el cultivo de cáñamo y la producción de
            semillas feminizadas. Nos especializamos en proveer genética de cáñamo a cultivadores en
            Uruguay y la región, para usos medicinales e industriales.
          </p>
        </div>
      }
      secondarySlot={<MgapImage />}
    />
    <StaticImage
      layout="fullWidth"
      aspectRatio={14 / 1}
      alt=""
      src={'../images/planta1.jpg'}
      formats={['auto', 'webp', 'avif']}
    />

    <section id="apoyos" className="pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-primary">
          Confían en Nosotros
        </h2>
        <div className="flex flex-col justify-around md:flex-row max-w-4xl mx-auto items-center">
          <AniiImage />

          <KhemImage />
        </div>
      </div>
    </section>

    <StaticImage
      layout="fullWidth"
      aspectRatio={14 / 1}
      alt=""
      src={'../images/planta1.jpg'}
      formats={['auto', 'webp', 'avif']}
    />
    <section id="moca" className="pt-10 bg-black text-white">
      <div className="container mx-auto text-center justify-around">
        <h2 className="text-3xl lg:text-4xl  font-semibold leading-tight text-white text-center">
          Moca
        </h2>

        <div className="py-8 mx-auto px-16 items-center flex leading-relaxed text-justify">
          <div className="lg:w-8/12 mt-8 mb-8 text-xl font-light leading-relaxed mx-auto">
            <p>
              Moca es una variedad de cáñamo desarrollada en Uruguay por Germinar. Presenta niveles
              de cannabidiol (CDB) de 13,4-15,9% y tetrahidrocannabinol (THC) de 0,6%.
            </p>
            <div className="flex flex-col lg:flex-row items-center my-8 justify-evenly text-center text-sm">
              <div className="w-10/12 md:w-1/2 my-3 lg:my-0 lg:w-1/3 mx-5 bg-white text-primary p-2 rounded-3xl shadow-2xl">
                <StatsBox primaryText="13,4 - 15,9%" secondaryText="Cannabidiol (CBD)" />
              </div>

              <div className="w-10/12 md:w-1/2 my-3 lg:my-0 lg:w-1/3 mx-5 bg-white text-primary p-2 rounded-3xl shadow-2xl">
                <StatsBox primaryText="0,6%" secondaryText="Tetrahidrocannabinol (THC)" />
              </div>
            </div>
            <p>
              Fue probada por cultivadores uruguayos durante la temporada 2020-2021 con excelentes
              resultados agronómicos, tanto a cielo abierto como en invernáculos. Soporta diferentes
              tipos de estrés, y fue evaluada en campo con niveles de riego y sustratos
              alternativos. Presenta un buen comportamiento frente a plagas y enfermedades comunes
              en el cultivo de cannabis. Tiene un tiempo estimado de cosecha de 60-65 días a partir
              de la floración y un rendimiento en condiciones óptimas de cultivo de entre 200-300
              gramos de flor seca por planta.
            </p>
          </div>
        </div>
        <div className="flex justify-around w-10/12 md:w-1/3 mx-auto">
          <a
            href="/analitica.pdf"
            target="_blank"
            className="w-10/12 mx-2 bg-primary hover:font-bold hover:text-white rounded py-4 px-12 text-white"
            size="lg"
          >
            Análitica
          </a>
          <a
            href="/moca.pdf"
            target="_blank"
            className="w-10/12 mx-2 bg-primary hover:font-bold hover:text-white rounded py-4 px-12 text-white"
            size="lg"
          >
            Ficha
          </a>
        </div>

        <div className={`relative bottom-0 right-0`}>{<MocaImage />}</div>
      </div>
    </section>

    <section id="historia" className="pt-10">
      <div className="container mx-auto px-16 flex flex-col">
        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-primary text-left lg:text-center">
          Nuestra Historia
        </h2>
        <p className="mt-8 text-xl font-light leading-relaxed">
          Germinar es una empresa familiar, en varios sentidos. En 2015, la familia Frávega-Estevan
          se enfrentó al diagnóstico de una de sus hijas, Mora, con una epilepsia de tipo
          refractario. Estas son afecciones de difícil tratamiento: el 30% de las personas con
          epilepsia no responde favorablemente a los fármacos de uso habitual y pueden tener varias
          convulsiones diarias.{' '}
        </p>
        <p className="mt-8 text-xl font-light leading-relaxed">
          Desde hace algunos años , en el mundo comenzaron a utilizarse extractos de cannabis con
          bajo THC (tetra-hidrocannabidiol, el componente psicoactivo de la planta) para el
          tratamiento de la epilepsia refractaria. Las primeras investigaciones sobre cannabinoides
          son del científico israelí{' '}
          <a href="https://www.youtube.com/watch?v=12tcXoxEt5g" target="_blank">
            Raphael Mechoulam
          </a>{' '}
          en los años 70.{' '}
        </p>
        <div className={`flex mt-8 w-full justify-around lg:w-2/3 mx-auto`}>
          <FamiliaImage />
        </div>

        <p className="mt-8 text-xl font-light leading-relaxed">
          Javier Frávega, a partir de una búsqueda de alternativas para su hija y el conocimiento de
          experiencias de otras familias a nivel internacional, se interesó en el uso del cannabis
          medicinal, estudió y se formó intentando ayudarla. Así surgió Germinar. El paso siguiente
          fue lograr una variedad estable de cáñamo que tuviera alto CBD (cannabidiol) y bajo THC,
          objetivo que alcanzaron en 2019 a partir del registro de MOCA en el Instituto Nacional de
          la Semilla.{' '}
        </p>
        <p className="mt-8 text-xl font-light leading-relaxed">
          Alentados por la neuropediatra de la familia iniciaron el camino para el registro de un
          producto local, ya que el aceite de cannabis importado que se utiliza en nuestro país aún
          tiene un costo elevado. La posibilidad de producir un aceite nacional de espectro completo
          es un objetivo a mediano plazo de la empresa.{' '}
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
