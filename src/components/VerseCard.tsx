import { useState } from "react";
import type { Verse } from "../types";

interface VerseCardProps {
  verses: Verse[];
}

const VerseCard = ({ verses }: VerseCardProps) => {
  const [verse, setVerse] = useState<Verse>(
    () => verses[Math.floor(Math.random() * verses.length)]
  );

  const getNewVerse = (): void => {
    const newVerse = verses[Math.floor(Math.random() * verses.length)];
    setVerse(newVerse);
  };

  return (
    <div className="bg-gradient-to-t from-zinc-100 to-zinc-500 p-8 rounded-xl shadow-xl text-center space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-extrabold text-outline-white">
        Bible Verse Randomizer
      </h1>

      {/* FIXED-SIZE Verse Box */}
      <div
        className="
          w-[50vw]
          h-[50vh]
          p-6
          border-12 border-gray-200 rounded-lg bg-gray-50
          overflow-auto
          flex items-center justify-center
          text-center
          break-words
        "
      >
        <div>
          <p className="text-lg italic">"{verse.text}"</p>
          <p className="mt-4 font-semibold">— {verse.reference}</p>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={getNewVerse}
        className="mt-8 bg-gradient-to-t from-purple-600 to-purple-800 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg transition-all duration-200 ease-in-out hover:scale-105"
      >
        New Verse
      </button>
    </div>
  );
};

export default VerseCard;
