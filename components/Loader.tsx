import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center absolute m-auto h-screen w-screen top-14 items-center z-10 gap-6">
      <Image
        className="animate-spin-slow"
        src="/pickle-rick.png"
        alt="loader"
        width={75}
        height={75}
      ></Image>
      <p className=" dark:text-lightFont">Loading...</p>
    </div>
  );
}
