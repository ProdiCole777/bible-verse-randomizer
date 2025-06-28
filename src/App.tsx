import VerseCard from "./components/VerseCard";
import type { Verse } from "./types";

const verses: Verse[] = [
  {
    text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
    reference: "John 3:16",
  },
  {
    text: "And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.",
    reference: "Romans 12:2",
  },
  {
    text: "For do I now persuade men, or God? Or do I seek to please men? For if I still pleased men, I would not be a bondservant of Christ.",
    reference: "Galatians 1:10",
  },
  {
    text: "But I make it known to you, brethren, that the gospel which was preached by me is not according to man. For I neither received it from man, nor was I taught it, but it came through the revelation of Jesus Christ.",
    reference: "Galatians 1:11-12",
  },
];

function App() {
  console.log("App component rendering");

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-900 to-slate-500 flex items-center justify-center p-4">
      <VerseCard verses={verses} />
    </div>
  );
}

export default App;
