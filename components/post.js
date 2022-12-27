import Image from "next/image";
import {
  DotsHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

export default function Post({ user, caption, id, img, avatar }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <Image
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={avatar}
          alt={user}
        />
        <p className="font-bold flex-1">{user}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <Image src={img} alt={caption} className="object-cover w-full" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{user}</span>
        {caption}
      </p>
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment"
        />
        <button className="font-bold">Post</button>
      </form>
    </div>
  );
}
