import { IWelcomeProps } from "@/Domain/interfaces/components/login.interface";
export const Welcome = ({title,className,subtitle}:IWelcomeProps) => {
  return <>
    <section className={className}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </section>
  </>;
};
