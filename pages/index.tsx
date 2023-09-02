import React from "react";
import Image from "next/image";
import image from "../public/image/공주등장.png";
import Bar from "../components/Bar";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div className="wrapper relative">
      <span className="title py-20 ">🎉김수연의 생일을 축하합니다🎉</span>
      <Bar />
      <div className="w-[500px] pt-20">
        <Image alt="공주등장" src={image} objectFit="contain" />
      </div>
      <span className="font-kangwon-bold pt-4">수연이 생일 기념</span>
      <div
        onClick={() => router.push("/about")}
        className="w-[70px] h-[70px] rounded-full fixed right-4 bottom-4 bg-purple2 flex items-center justify-center text-white font-kangwon-bold text-lg hover:cursor-pointer hover:-translate-y-2 transition-all"
      >
        About
      </div>
    </div>
  );
};

export default Index;
