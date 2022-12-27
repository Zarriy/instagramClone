import userImg from "../public/zarriyy.jpeg";
import postImage from "../public/zarrinsta.png";
import Post from "./post";

export default function Posts() {
  const data = [
    {
      username: "zawar",
      userAvatar: userImg,
      image: postImage,
      caption: "Started journey towards new projects",
      id: 1,
    },
  ];

  return (
    <div>
      {data.map((d) => {
        return (
          <Post
            user={d.username}
            id={d.id}
            key={d.id}
            avatar={d.userAvatar}
            img={d.image}
            caption={d.caption}
          />
        );
      })}
    </div>
  );
}
