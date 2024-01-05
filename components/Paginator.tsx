import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface PaginatorProps {
  currentPage: number;
  lastPage: number;
  onNextPage: any;
  onPrevPage: any;
}
export default function Paginator({
  currentPage,
  lastPage,
  onNextPage,
  onPrevPage,
}: PaginatorProps) {
  const { asPath, query } = useRouter();
  const pathname = asPath.split(/[?#]/)[0];
  return (
    <div className="flex justify-center items-center mt-4">
      {currentPage !== 1 && (
        <Link
          href={{
            pathname: pathname,
            query: { ...query, page: currentPage - 1 },
          }}
          onClick={onPrevPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="20"
            viewBox="0 0 320 512"
            className=" mx-4  hover:fill-cyan dark:fill-lightFont dark:hover:fill-cyan"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>
      )}

      <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-cyan">
        {" "}
        {currentPage}
      </div>
      {currentPage !== lastPage && (
        <Link
          href={{
            pathname: pathname,
            query: { ...query, page: currentPage + 1 },
          }}
          onClick={onNextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="20"
            viewBox="0 0 320 512"
            className="mx-4 hover:fill-cyan dark:fill-lightFont  dark:hover:fill-cyan"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </Link>
      )}
    </div>
  );
}
