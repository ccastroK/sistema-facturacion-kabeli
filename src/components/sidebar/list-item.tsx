import { IListItemProps } from "@/domain/interfaces/components/side-bar.interface";
import { FaIcon } from "../shared/icons/fa-icons";

export const ListItem = ({
  className,
  onlyIcon,
  icon,
  onClick,
  name,
}: IListItemProps) => {
  return (
    <li className={className} onClick={onClick}>
      <main>
        {<FaIcon icon={icon} />}
        {!onlyIcon ? name ? <article>{name}</article> : null : null}
      </main>
    </li>
  );
};
