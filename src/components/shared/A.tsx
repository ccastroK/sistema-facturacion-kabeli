import { IAProps } from "@/interfaces/components/global-components.interface";
import Link from "next/link";

export const A = ({ name, url }: IAProps) => <Link href={url}>{name}</Link>;
