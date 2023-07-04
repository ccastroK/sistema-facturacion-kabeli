"use client"

import { NewPassword } from "@/components/password/new-password/new-password"


export default function Page({ params }: { params: { type: string, token:string } }) {
  return <NewPassword token={params.token} type={params.type}/>
}
