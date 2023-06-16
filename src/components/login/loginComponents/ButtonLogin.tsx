import {IButtonProps} from '@/interfaces/components/login.interface';


export const ButtonLoggin = ({classname,name,nameA}:IButtonProps) => {
    return (
        <section className={classname} >
            <button type="submit">{name}</button>
            <a>{nameA}</a>
        </section>
    )
}