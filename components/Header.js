import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400'], subsets: ['latin'] });

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={playfair.className}>
        <div className={styles.contenedor}>
          <div className={styles.barra}>
              <Link href='/'>
                <p>
                  <span className={styles.parrafo}>47</span>
                  <span className={styles.grados}>°</span>
                  <span className={styles.subrayado}>café</span>
                </p>

              </Link>

            <nav className={styles.navegacion}>
              <Link href='/'>Inicio</Link>
              <Link href='/nosotros'>Nosotros</Link>
              <Link href='/menu'>Menú</Link>
              <Link href='/pedidos'>Pedidos online</Link>
              <Link href='/contacto'>Contáctanos</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header