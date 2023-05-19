'use client'
import styles from './SideBarStyle.module.css'
import { ListItem } from './ListItem'
import { useState } from 'react'
export const SideBar=()=>{

   const items:string[] = ['Dashboard','Socios','Proyectos','Clientes','Facturacion','Pagos']

   const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleCLick=(index:number) => {
        setSelectedItem(index);
    }


    return (
        <aside className={styles.container}>
            <ul className={styles.list}>
                {items.map((item,index)=>(<ListItem index={index} onClick={handleCLick} selected={selectedItem===index} key={index} name={item} className={styles.listItem} />))}
            </ul>
        </aside>
    )
}