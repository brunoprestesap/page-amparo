import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20
      py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/brain.svg"
          alt="brain"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">Instituto Amparo</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Com abordagens terapêuticas personalizadas e um ambiente acolhedor,
          estamos comprometidos em ajudá-lo a recuperar o equilíbrio mental e
          emocional."
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            100+
            <span className="regular-16 lg:regular-20 ml-1">
              Excelentes avaliações no Google
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Agende sua consulta"
            variant="btn_green"
          />
        </div>
      </div>

      {/* <div className="relative flex flex-1 items-end">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-[#283618] px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Localização</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Macapá</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Bairro</p>
              <p className="bold-20 text-white">Trem</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Estado</p>
              <p className="bold-20 text-white">Amapá</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
