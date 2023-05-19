import React from 'react'
import styles from '../styles/Footer.module.css'
import { Noto_Serif_Georgian } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const space = Noto_Serif_Georgian({ weight:['400'] ,subsets: ['latin'] });

const Footer = () => {
    return (
        <div className={space.className}>
            <footer className={styles.footer} >
                <div className={styles.contenedor}>
                    <div>
                        <div>
                            <p className={styles.titulo}>
                                Pásate a comer algo
                            </p>
                        </div>
                        <div className={styles.principal}>
                            <div>
                                <div className={styles.subTitulo1}>
                                    Dirección
                                </div>
                                <br></br>
                                <div className={styles.titulo3}>
                                    Av. Fray A. alcalde 10,<br></br>

                                    44100 Guad., Jal., Mx
                                </div>
                                <br></br>
                            </div>
                            <div className={styles.divisor}></div>
                            <div>
                                <div className={styles.subTitulo2}>
                                    Horario Laboral
                                </div>
                                <br></br>
                                <div className={styles.titulo3}>
                                    Lun - Vie: 9:00 - 18:00<br></br>
                                    Sábado: 10:00 - 14:00
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer