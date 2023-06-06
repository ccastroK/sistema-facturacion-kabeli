"use client"
import { CreateSocio } from "@/components/forms/formsVieww/CreateSocio";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Socios = ()=>{

  return (<>
      <CreateSocio/>
    </>)
}

export default Socios;
