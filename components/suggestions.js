import minifaker from "minifaker";
import "minifaker/locales/en";
import { useState, useEffect } from "react";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const sugges = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }),
      jobTitle: minifaker.jobTitle(),
      userImg: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 20
      )}`,
      id: i,
    }));
    setSuggestions(sugges);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion.id}
        >
          <img
            className="h-10 w-10 rounded-full border p-[1.50px]"
            src={suggestion.userImg}
            alt={suggestion.username}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semi-bold text-sm">{suggestion.username}</h2>
            <h3 className="font-semi-bold text-sm text-gray-500 truncate w-[230px]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="font-semi-bold text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}
