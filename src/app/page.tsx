import {HeaderTemplate} from '../components/header/Header'
import { SideBar } from '../components/sidebar/sideBar'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <div>
        <HeaderTemplate nombreUsuario='Rodrigo Viveros' rol='Administrador'></HeaderTemplate>
        <SideBar></SideBar>
      </div>
    </Fragment>
  )
}
