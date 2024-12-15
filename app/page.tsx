import Image from "next/image";
import homeScr from "../public/feng.png";

export default function Home() {
  return (
    <div className="text-white h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={homeScr} layout="fill" objectFit="cover" alt=""/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      <div className="flex items-center justify-center h-full text-center text-white">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
