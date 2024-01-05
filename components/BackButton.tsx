import Link from "next/link";
import { BackButton } from "../interfaces/interfaces";

export default function BackButton({ url }: BackButton) {
  return (
    <Link
      className="flex justify-start items-center w-24 dark:text-lightFont hover:text-cyan mt-6 ml-8 dark:hover:text-alive"
      href={url}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 h-8 pr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
      <p>Go back</p>
    </Link>
  );
}
