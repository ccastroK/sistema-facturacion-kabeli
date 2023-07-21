import { IAProps } from "@/Domain/interfaces/components/global-components.interface";
import Link from "next/link";
// CRW custom-a plz
export const A = ({ name, url }: IAProps) => <Link href={url}>{name}</Link>;
