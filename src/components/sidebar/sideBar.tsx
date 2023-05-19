'use client'
import styles from './SideBarStyle.module.css'
import { ListItem } from './listItem'
export const SideBar=()=>{

   const items:string[] = ['Dashboard','Socios','Proyectos','Clientes','Facturacion','Pagos']


    return (
        <aside className={styles.container}>
            <ul className={styles.list}>
                {items.map((item,index)=>(<ListItem key={index} name={item} circleClassName={styles.circle} className={styles.listItem} />))}
            </ul>
        </aside>
    )
}