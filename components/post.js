import Image from "next/image";
import {
  DotsHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Post({ user, caption, id, img, avatar }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const unsubscribed = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snap) => {
        setComments(snap.docs);
      }
    );
    return unsubscribed;
  }, [db, id]);
  useEffect(() => {
    const unsubscribed = onSnapshot(
      collection(db, "posts", id, "likes"),
      (likes) => {
        setLikes(likes.docs);
      }
    );
  }, [db, id]);
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
    setComment("");
  }

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }

  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <Image
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={avatar}
          alt={user}
          width="192"
          height="192"
        />
        <p className="font-bold flex-1">{user}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <Image
        src={img}
        alt={caption}
        className="object-cover w-full"
        width="600"
        height="600"
      />
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-400"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-2">{user}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll">
          {comments.map((comment, i) => (
            <div className="flex items-center space-x-2 mb-2" key={i}>
              <img
                src={comment.data().userImage}
                alt={comment.data().username}
                className="h-7 rounded-full object-cover"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            onClick={sendComment}
            className="font-bold disabled:text-gray-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
