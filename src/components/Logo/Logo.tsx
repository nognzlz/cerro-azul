import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-1 items-center h-20">
      <div className="relative w-12 h-6">
        <Image
          fill={true}
          className="object-contain w-[100px] h-[100px]"
          src="/images/cerro.svg"
          alt="Cerro Azul"
        />
      </div>
      <span className="text-white text-2xl font-bolder leading-none">
        CERRO AZUL
      </span>
    </div>
  );
};
