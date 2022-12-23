import Image from "next/image";
import logo from "../public/zarrinsta.png";
import mobLogo from "../public/instagram.png";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import personImg from "../public/zarriyy.jpeg";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between max-w-6xl xl:mx-auto mx-4">
        <div className="h-24 w-48 relative hidden  lg:inline-grid ">
          <Image
            src={logo}
            alt="Zarrinsta application"
            className="cursor-pointer object-contain self-center"
          />
        </div>
        <div className="h-24 w-10 relative cursor-pointer inline-grid lg:hidden">
          <Image
            src={mobLogo}
            alt="Zarrinsta application"
            className="cursor-pointer self-center object-contain"
          />
        </div>
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <div className="flex gap-4 items-center">
          <HomeIcon className="h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-in" />
          <PlusCircleIcon className="h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-in" />
          <Image
            src={personImg}
            alt="person image"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
