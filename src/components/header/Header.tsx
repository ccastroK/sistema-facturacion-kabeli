'use client'
import styles from './HeaderStyle.module.css';
import Image from 'next/image';

type HeaderProps = {
    nombreUsuario:string,
    rol:string
}


export function HeaderTemplate({nombreUsuario,rol}:HeaderProps){
return (
<header>
    <div className={styles.header}>
        <figure className={styles.figureImg}>
            <a href="">
                <img src="/logo_kabeli.png" className={styles.imgheader} alt="" />
            </a>
        </figure>
        <section className={styles.section}>
            <figure className={styles.figureImg}>
                <a href="">
                    <img src="/notificacion.png" alt="figure-alerta" className={styles.logoNotificacion}/>
                </a>
            </figure>
            <div className={styles.circle}></div>
            <div className={styles.txtUsuario}>
                <p className={styles.nombre}>{nombreUsuario}</p>
                <p className={styles.cargo} >{rol}</p>
            </div>
            <figure className={styles.figureImg}>
                <a href="">
                    <img className={styles.logoNotificacion} src="/salida-de-emergencia.png" alt="" />
                </a>
            </figure>
        </section>
    </div>
</header>)
}