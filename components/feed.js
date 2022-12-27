import Stories from "./stories";
import Posts from "./posts";
import MiniProfile from "./miniprofile";
import Suggestions from "./suggestions";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <section className="md:col-span-2 md:max-w-6xl mx-auto">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
