import { Title } from "@/components/shared/Title";
import styles from "../LoginStyle.module.css";
import { Welcome } from "../loginComponents/Welcome";
import { InputText } from "@/components/forms/inputs/inputText";
import { Button } from '../../shared/Button';


export const LogInView = () => {
    return (
        <main className={styles.container}>
            <Title title="Factify" classname={styles.logo}/>
            <Welcome subtitle="Ingresa con tu cuenta Kabeli" title="Te damos la bienvenida" className={styles.welcome} />
            <h6>Digamos que existe el boton de google</h6>
            <form>
                <InputText classname={styles.inpMail} nombre="Correo electrónico" placeholder="persona@kabeli.cl" value="mail" ></InputText>
                <InputText classname={styles.inpPass} nombre="Contraseña" placeholder="************" value="password" ></InputText>
                <Button classname={styles.btnSubmit} name="Iniciar Sesion"/>
            </form>
            <a>¿No tienes tu contraseña?</a>
        </main>
    )
}