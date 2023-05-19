import {HeaderTemplate} from '../components/header/Header'
import { SideBar } from '../components/sidebar/sideBar'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
        <HeaderTemplate userName='Rodrigo Viveros' role='Administrador'></HeaderTemplate>
        <SideBar></SideBar>
    </Fragment>
  )
}
