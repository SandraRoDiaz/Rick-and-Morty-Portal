import Image from "next/image";
import Link from "next/link";

export default function Page404() {
  return (
    <div className=" bg-lightGray flex flex-col justify-center items-center gap-6 h-[calc(100vh-68px)] dark:bg-darkBg ">
      <h1 className="text-4xl dark:text-lightFont">Dimension not found</h1>
      <h3 className="text-xl opacity-80 dark:text-lightFont">
        Wrong portal, maybe you want to{" "}
        <Link
          className=" text-darkGreen dark:text-alive hover:underline hover:decoration-1"
          href="/"
        >
          jump again
        </Link>
      </h3>
      <Image
        className="pt-4"
        src="/image-404.png"
        alt="rickandmorty"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
