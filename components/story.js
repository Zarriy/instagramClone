import Image from "next/image";
import { PlusIcon } from "@heroicons/react/solid";

export default function Story({ image, username, isUser }) {
  return (
    <div className="relative cursor-pointer">
      <Image
        className="h-14 rounded-full border-red-500 border-2 p-[1.5px] cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={image}
        alt={username}
        width={50}
        height={50}
      />
      {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white" />}
      <p className="w-14 text-xs truncate">{username}</p>
    </div>
  );
}
