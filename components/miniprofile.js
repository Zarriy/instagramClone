import Img from "../public/zarriyy.jpeg";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between ml-10">
      <Image
        className="h-16 w-16 border rounded-full p-[2px]"
        src={session?.user.image}
        alt="user Image"
        width={50}
        height={50}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Explore Next.Js</h3>
      </div>
      <button onClick={signOut} className="font-semibold text-sm">
        Log Out
      </button>
    </div>
  );
}
