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
    <div className="bg-gradient-to-t from-zinc-100 to-zinc-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl text-center space-y-4 sm:space-y-6 w-full max-w-4xl mx-auto">
      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-800 drop-shadow-lg">
        Bible Verse Randomizer
      </h1>

      {/* RESPONSIVE Verse Box */}
      <div
        className="
          w-full
          h-64 sm:h-80 md:h-96 lg:h-[50vh]
          p-4 sm:p-6
          border-2 sm:border-4 md:border-8 border-gray-200 rounded-lg bg-gray-50
          overflow-auto
          flex items-center justify-center
          text-center
          break-words
        "
      >
        <div className="px-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl italic">
            "{verse.text}"
          </p>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg font-semibold">
            — {verse.reference}
          </p>
        </div>
      </div>

      {/* RESPONSIVE BUTTON */}
      <button
        onClick={getNewVerse}
        className="mt-4 sm:mt-6 md:mt-8 bg-gradient-to-t from-purple-600 to-purple-800 text-white text-base sm:text-lg md:text-xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
      >
        New Verse
      </button>
    </div>
  );
};

export default VerseCard;
