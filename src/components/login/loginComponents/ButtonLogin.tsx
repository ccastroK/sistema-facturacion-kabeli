
type ButtonProps = {
    name:string;
    classname:string;
    nameA:string
}


export const ButtonLoggin = ({classname,name,nameA}:ButtonProps) => {
    return (
        <section className={classname} >
            <button type="submit">{name}</button>
            <a>{nameA}</a>
        </section>
    )
}