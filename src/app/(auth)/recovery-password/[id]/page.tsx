"use client"

import { CreatePassword } from "@/components/password/create-password/create-password";

export default function Page({ params }: { params: { id: string } }) {
  return <CreatePassword id={params.id}/>
}
