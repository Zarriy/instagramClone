import userImg from "../public/zarriyy.jpeg";
import postImage from "../public/zarrinsta.png";
import Post from "./post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribed = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snap) => {
        setData(snap.docs);
      }
    );
    return unsubscribed;
  }, [db]);

  return (
    <div>
      {data.map((d) => {
        return (
          <Post
            user={d.data().username}
            id={d.id}
            key={d.id}
            avatar={d.data().profileImage}
            img={d.data().image}
            caption={d.data().caption}
          />
        );
      })}
    </div>
  );
}
