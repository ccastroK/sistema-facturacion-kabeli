import {
  faTableColumns,
  faUsers,
  faBriefcase,
  faBuilding,
  faChevronLeft,
  faCashRegister,
  faChevronRight,
  faInfoCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
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
  faGoogle,
  faCircleCheck,
  faCircleXmark,
  faMagnifyingGlass,
};

type ObjectKey = keyof typeof FaIcon;

export const FaIcon = ({ icon }: IFaIcon) => (
  <FontAwesomeIcon icon={faIcons[icon as ObjectKey]} />
);
