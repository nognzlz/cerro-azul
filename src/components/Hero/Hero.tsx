import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[400px]">
        <Image
          alt="construccion background"
          src="/images/construccion.jpg"
          fill={true}
          className="object-cover w-full h-[400px] absolute"
        />
      </div>
      <div className="absolute w-full h-[400px] bg-gray-900 bg-opacity-40"></div>
      <div className="absolute w-full h-[400px] backdrop-contrast-40 backdrop-blur-sm p-8 text-center flex flex-col items-center justify-center">
        <span className="text-[40px] font-extrabold text-slate-100 line-clamp-2">
          Aseguramos la mejor calidad para tu obra
        </span>
        <div className="block text-slate-100 font-bold text-2xl mt-4">
          No pagues de mas, nosotros te asesoramos
        </div>
      </div>
    </div>
  );
};
