import { Logo } from '@/components/shared/Logo';
import styles from './password-successful.module.css';
import { Title } from '../../shared/Title';
import { faIcon } from '../../shared/icons/fa-icons';
import { Button } from '../../shared/buttons/Button';



export const PassWordCreateSuccessful = () => (
    <main className={styles.container}>
        <Logo alt="Logo Factify" src="/factfy.png" onClick={() => {}} />
        <Title title='Excelente !!!' />
        {faIcon('faCircleCheck')}
        <p>Haz creado tu contraseña con éxito, ahora puedes ingresar a Factfy</p>
        <Button name='Ingresar al Home' type='button'/>
    </main>
)