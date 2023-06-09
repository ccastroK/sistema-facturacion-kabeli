
interface AProps {
    name:string
    onClick: () => void
}

export const A = ({name,onClick}:AProps) => (
    <a onClick={onClick}>{name}</a>
)