import { Logo } from "../shared/logo";
import style from './footer-style.module.css';

export const Footer = () => (
    <footer className={style.footer}>
        <section>
            Desrrollado por <Logo onClick={() => {}} className={style.logo} alt="Kabeli Logo" src="logo_kabeli" />
        </section>
        <section>
            La transformación digital de tu negocio comienza con <a href="https://www.kabeli.cl/">https://www.kabeli.cl/</a>
        </section>
    </footer>
)