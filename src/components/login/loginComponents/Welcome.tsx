
type WelcomeProps = {
    title:string,
    subtitle:string,
    className:string
}


export const Welcome = ({title,className,subtitle}:WelcomeProps) => {
  return <>
    <section className={className}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </section>
  </>;
};
