import {
  faUserGroup,
  faTableColumns,
  faBriefcase,
  faCity,
  faScroll,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {faCircleCheck,faCircleXmark} from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false;

const faIcons = {
  faUserGroup,
  faTableColumns,
  faBriefcase,
  faCity,
  faScroll,
  faChevronLeft,
  faChevronRight,
  faGoogle,
  faCircleCheck,
  faCircleXmark,
  faMagnifyingGlass
};

type ObjectKey = keyof typeof faIcon;

export const faIcon = (icon: string) => (
  <FontAwesomeIcon icon={faIcons[icon as ObjectKey]} />
);
