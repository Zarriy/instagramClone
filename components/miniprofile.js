import Img from "../public/zarriyy.jpeg";
import Image from "next/image";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between">
      <Image
        className="h-16 w-16 border rounded-full p-[2px]"
        src={Img}
        alt="user Image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Zarriy</h2>
        <h3 className="text-sm text-gray-400">Explore Next.Js</h3>
      </div>
      <button className="font-semibold text-sm">Log Out</button>
    </div>
  );
}
