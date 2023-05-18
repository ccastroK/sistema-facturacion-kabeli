'use client'
import styles from './SideBarStyle.module.css'
export function SideBar(){
    return (
        <aside className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />     
                    <label className={styles.txtLabel}>Dashboard</label>
                </li>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />
                    <label className={styles.txtLabel}>Socios</label>
                </li>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />
                    <label className={styles.txtLabel}>Proyectos</label>
                </li>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />
                    <label className={styles.txtLabel}>Clientes</label>
                </li>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />
                    <label className={styles.txtLabel}>Facturacion</label>
                </li>
                <li className={styles.listElement}>
                    <input className={styles.inputRadio} type="radio" name="aside" id="" />
                    <label className={styles.txtLabel}>Pagos</label>
                </li>
            </ul>
        </aside>
    )
}