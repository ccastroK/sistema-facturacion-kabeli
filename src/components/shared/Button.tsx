
type ButtonProps = {
    name:string;
    classname:string;
}


export const Button = ({classname,name}:ButtonProps) => {
    return (<>
        <button className={classname} type="submit">{name}</button>
    </>)
}