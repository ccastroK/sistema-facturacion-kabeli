import React, { Dispatch, SetStateAction } from "react";
import { usePagination, DOTS } from "./usePagination";
import style from './pagination-style.module.css';
import { faIcon } from "../icons/fa-icons";

export interface IPagination {
  onPageChange: (page: SetStateAction<number>) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount
}: IPagination) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) as string[];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    console.log(currentPage)
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={style.container} >
      <li onClick={onPrevious} className={`${style.item} ${currentPage === 1 ? style.disabled : ''}`}  >
        {faIcon('faChevronLeft')}
      </li>
      {paginationRange.map((pageNumber, key) => {
        if (pageNumber === DOTS) {
          return <li key={key} className={`${style.item} ${style.dots}`}>&#8230;</li>;
        }

        return (
          <li key={key} className={`${style.item} ${ Number.parseInt(pageNumber) === currentPage ? style.selected : ''}`} onClick={() => onPageChange(Number.parseInt(pageNumber))}>
            {pageNumber}
          </li>
        );
      })}
      <li className={`${style.item} ${currentPage === Number.parseInt(lastPage) ? style.disabled : ''}`} onClick={onNext}>
        {faIcon('faChevronRight')}
      </li>
    </ul>
  );
};

export default Pagination;
