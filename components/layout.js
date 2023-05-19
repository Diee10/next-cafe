import Header from './Header';
import Footer from './Footer';
import Slide from './Slide';

const name = 'Diego Gonzalez';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const fecha = new Date()
  const añoActual = fecha.getFullYear();
  const texto3 = `©copyright ${añoActual} Por 47° Café. Desarrollado y protegido por Diego`
  return (
    <>
      <Header/>
        {children}
      <Footer/>
      <Slide text = "Términos y Condiciones  " text2 = "Política de Privacidad" text3 = {texto3}/>
    </>
  );
}