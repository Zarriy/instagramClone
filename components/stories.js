import minifaker from "minifaker";
import "minifaker/locales/en";
import { useState, useEffect } from "react";
import Story from "./story";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const fakeUsers = minifaker.array(20, (i) => ({
      username: minifaker.name({ locale: "en" }),
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 20)}`,
      id: i,
    }));
    setUsers(fakeUsers);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm">
      {session && (
        <Story
          image={session.user.image}
          username={session.user.username}
          key={session.user.uid}
          isUser={true}
        />
      )}
      {users.map((user) => {
        return (
          <Story
            image={user.image}
            username={user.username}
            key={user.id}
            id={user.id}
          />
        );
      })}
    </div>
  );
}
