import Layout, { siteTitle } from '../components/layout';
import Image from 'next/legacy/image';
import Slide from '../components/Slide';
import useIntersection from '../components/useIntersection';
import { Noto_Serif_Georgian } from 'next/font/google';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

const space = Noto_Serif_Georgian({ weight: ['400'], subsets: ['latin'] });

function ImageWithText({ src, alt, caption, caption2 }) {
  return (
    <div style={{ position: 'relative' }} className={space.className}>
      <Image src={src} alt={alt} width={2000} height={1100} layout="responsive" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1' }}>
          <p className={utilStyles.pPrincipal}><span>{caption2}</span></p>
          <p className={utilStyles.pSecundario}><span>{caption}</span><br></br>
            <button className='custom-button'><span>Pedir Ahora</span></button>
            <button className='custom-button'><span>Nuestro Menú</span></button></p>
        </div>
      </div>
    </div>
  )
}
export default function Home() {

  const [ref1, isIntersecting] = useIntersection({
    threshold: 1.0
  });
  const [ref2, isIntersecting2] = useIntersection({
    threshold: 1.0
  });
  const [ref3, isIntersecting3] = useIntersection({
    threshold: 1.0
  })
  const [ref5, isIntersecting5] = useIntersection({
    threshold: 1.0
  })
  const [ref6, isIntersecting6] = useIntersection({
    threshold: 1.0
  })

  return (
    <>
      <Head>
        <title>Diego App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <div>
          <ImageWithText src="/images/cafe.jpg" alt="My Image" caption='Tu lugar para comer delicioso y tomar Café' caption2='Café y restaurante' />
        </div>
        <Slide />
        <div className={space.className}>
          <div className={utilStyles.divPrincipal}>
            <div className={`${utilStyles.izquierda} ${utilStyles.order1}`} data-order="1" style={{transform: isIntersecting ? "scale(0.98)" : "scale(1)",transition: "transform 0.5s ease-in-out",}}ref={ref1}>
              <p className={utilStyles.parrafo}>
                <span className={utilStyles.spanBg}>Come.</span><br />
                <span className={utilStyles.spanMd}>Desayuno, comida y repostería artesanal.</span><br /><br />
                <span className={utilStyles.spanXs}>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.
                </span>
                <br /><br /><button className={utilStyles.boton2}><span>Ver más</span></button>
              </p>
            </div>
            <div className={`${utilStyles.derecha} ${utilStyles.order2}`} data-order="2" ref={ref2}>
              <Image style={{transform: isIntersecting2 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease-in-out',}} src="/images/comidaHuevo.jpg" alt="Comida de Huevo" layout="responsive" width={1000} height={700}/>
            </div>
          </div>
          <div className={utilStyles.divPrincipal}>
            <div className={`${utilStyles.derecha} ${utilStyles.order2}`} data-order="2" ref={ref3}>
              <Image src="/images/servirCafe.jpg" alt="servir" layout="responsive" width={1000} height={700} style={{transform: isIntersecting3 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease-in-out',}}/>
            </div>
            <div className={`${utilStyles.izquierda} ${utilStyles.order1}`} data-order="1">
              <p className={utilStyles.parrafo}>
                <span className={utilStyles.spanBg}>Bebe.</span><br />
                <span className={utilStyles.spanMd}>La taza más fresca de la ciudad.</span><br /><br />
                <span className={utilStyles.spanXs}>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</span>
                <br /><br /><button className={utilStyles.boton2}><span>Ver más</span></button>
              </p>
            </div>
          </div>
          <div className={utilStyles.divPrincipal}>
            <div className={`${utilStyles.izquierda} ${utilStyles.order1}`} data-order="1" ref={ref5} style={{ transform: isIntersecting5 ? 'scale(0.98)' : 'scale(1)', transition: 'transform 0.5s ease-in-out', }}>
              <p className={utilStyles.parrafo}>
                <span className={utilStyles.spanBg}>Disfruta.</span><br />
                <span className={utilStyles.spanMd}>Siéntete como en casa.</span><br /><br />
                <span className={utilStyles.spanXs}> Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</span>
                <br /><br /><button className={utilStyles.boton2}><span>Visítanos</span></button>
              </p>
              </div>
              <div className={`${utilStyles.derecha} ${utilStyles.order2}`}data-order="2" ref={ref6}>
                <Image src="/images/disfruta.jpg" alt="servir" layout="responsive" width={1000} height={700} style={{
                    transform: isIntersecting6 ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.5s ease-in-out",}}/>
              </div>
          </div>
        </div>
      </Layout>

    </>

  );
}
