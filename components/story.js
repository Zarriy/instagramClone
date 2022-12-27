import Image from "next/image";

export default function Story({ image, username }) {
  return (
    <div>
      <Image
        className="h-14 rounded-full border-red-500 border-2 p-[1.5px] cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={image}
        alt={username}
        width={50}
        height={50}
      />
      <p className="w-14 text-xs truncate">{username}</p>
    </div>
  );
}
