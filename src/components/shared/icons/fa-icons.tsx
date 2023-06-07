import {
  faUserGroup,
  faTableColumns,
  faBriefcase,
  faCity,
  faScroll,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const faIcons = {
  faUserGroup,
  faTableColumns,
  faBriefcase,
  faCity,
  faScroll,
  faChevronLeft,
  faChevronRight,
};

type ObjectKey = keyof typeof faIcon;

export const faIcon = (icon: string) => (
  <FontAwesomeIcon icon={faIcons[icon as ObjectKey]} />
);
