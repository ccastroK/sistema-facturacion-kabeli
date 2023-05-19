import { HeaderTemplate } from "../components/header/Header";
import { SideBar } from "../components/sidebar/sideBar";
import { Fragment } from "react";
import { FormSocio } from "../components/forms/formsVieww/FormSocio";
import styles from "../app/page.module.css";

export default function Home() {
  return (
    <Fragment>
      <HeaderTemplate
        userName="Rodrigo Viveros"
        role="Administrador"
      ></HeaderTemplate>
      <SideBar />
      <FormSocio />
    </Fragment>
  );
}
