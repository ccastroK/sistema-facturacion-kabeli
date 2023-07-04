"use client"

import { SendCreatePassword } from "@/components/password/send-create-password/send-create-password";



export default function Page({ params }: { params: { title: string } }) {
  return <SendCreatePassword type={params.title} />;
}


