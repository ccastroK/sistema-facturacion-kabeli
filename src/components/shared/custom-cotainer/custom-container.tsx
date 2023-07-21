import style from './custom-container.module.css';
import { ICustomContainer } from '@/Domain/interfaces/components/global-components.interface';

export const CustomContainer = ({children}:ICustomContainer) => {
    return <main className={style.container}>{children}</main>
}