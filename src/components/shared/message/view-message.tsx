import { IViewMessage } from "@/Domain/interfaces/components/global-components.interface";

// CRW y las mayus en las variables?
export const ViewMessage = ({
  Logo,
  Title,
  Button,
  faIcon,
  text,
  classname,
}: IViewMessage) => {
  return (
    <main className={classname}>
      {Logo}
      {Title}
      {faIcon}
      <p>{text}</p>
      {Button}
    </main>
  );
};
