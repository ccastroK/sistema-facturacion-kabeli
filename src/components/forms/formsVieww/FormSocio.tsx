"use client"
import styles from '../FormStyle.module.css';


export const FormSocio = () => {
    return (
        <main className={styles.container}>
            <article>
                <section>
                    <h1>Socios / Nuevo Socio</h1>
                </section>
                <section>
                    <h5>Datos</h5>
                    <form>
                        <label></label>
                        <input type="text" />
                    </form>
                </section>
            </article>
        </main>
    )
}