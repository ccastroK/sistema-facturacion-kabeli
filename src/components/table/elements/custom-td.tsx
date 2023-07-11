

export const CustomTD = <T,>(item:T,key:number) => (
    <td key={key}>{item as string}</td>
)