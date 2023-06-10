import Link from "next/link"

interface AProps {
    name:string
    url:string
}

export const A = ({name,url}:AProps) => (
   <Link href={url}>{name}</Link>
)