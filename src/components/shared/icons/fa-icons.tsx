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
  faUser,
  faRightFromBracket,
  faCircleExclamation,
  faTriangleExclamation,
  faXmark,
  faEllipsisVertical,
  faArrowRight,
  faPlus,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCircleXmark,
  faEye,
  faEyeSlash,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
config.autoAddCss = false;

interface IFaIcon {
  icon: string;
  onClick?:()=>void
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
  faEye,
  faEyeSlash,
  faUser,
  faRightFromBracket,
  faBell,
  faCircleExclamation,
  faTriangleExclamation,
  faXmark,
  faEllipsisVertical,
  faArrowRight,
  faPlus,
  faSort
};

type ObjectKey = keyof typeof FaIcon;

export const FaIcon = ({ icon, onClick}: IFaIcon) => (
  <FontAwesomeIcon onClick={onClick} icon={faIcons[icon as ObjectKey]} />
);
