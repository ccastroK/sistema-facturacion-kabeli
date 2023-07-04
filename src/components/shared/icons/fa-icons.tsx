import {
  faTableColumns,
  faUsers,
  faBriefcase,
  faBuilding,
  faChevronLeft,
  faCashRegister,
  faChevronRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

interface IFaIcon {
  icon: string;
}

const faIcons = {
  faUsers,
  faTableColumns,
  faBriefcase,
  faBuilding,
  faCashRegister,
  faChevronLeft,
  faChevronRight,
  faInfoCircle,
};

type ObjectKey = keyof typeof FaIcon;

export const FaIcon = ({ icon }: IFaIcon) => (
  <FontAwesomeIcon icon={faIcons[icon as ObjectKey]} />
);
