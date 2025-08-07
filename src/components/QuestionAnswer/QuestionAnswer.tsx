import React, { useState } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addScore, setCatToCompare, setCutestCat } from "@/store/catsSlice";
import { Cat } from "@/types";
import { getRandomCatExcludingId } from "@/lib/array";

type QuestionAnswerProps = {
  question: string;
};

export default function QuestionAnswer({ question }: QuestionAnswerProps) {
  const [rounds, setRounds] = useState(0);
  const dispatch = useAppDispatch();
  const listCat = useAppSelector((state) => state.cats.list);
  const cutestCat = useAppSelector((state) => state.cats.cutestCat);
  const catToCompare = useAppSelector((state) => state.cats.catToCompare);

  const chooseCat = (cat: Cat) => {
    dispatch(addScore({ id: cat.id }));
    dispatch(setCutestCat(cat));
    dispatch(setCatToCompare(getRandomCatExcludingId(listCat, cat.id)));
    setRounds(rounds + 1);
  };

  return (
    <div className="pt-10">
      <div className="text-lg">{question}</div>
      <ul className="inline-grid grid-cols-2 mt-3 gap-10">
        <li
          className={`border p-10 cursor-pointer rounded-tl-2xl rounded-br-2xl transition-transform duration-300 hover:scale-105 ${
            rounds !== 0 ? "border-indigo-500" : "border-gray-300"
          }`}
        >
          <button
            onClick={() => chooseCat(cutestCat!)}
            className="w-[220px] h-[180px] relative overflow-hidden rounded-md "
          >
            {cutestCat?.url && (
              <Image
                src={cutestCat.url}
                alt="cutest Cat"
                fill
                className="object-cover cursor-pointer"
                unoptimized
              />
            )}
          </button>
        </li>
        <li className="border border-gray-300 p-10 rounded-tl-2xl rounded-br-2xl cursor-pointer  transition-transform duration-300 hover:scale-105">
          <button
            onClick={() => chooseCat(catToCompare!)}
            className="w-[220px] h-[180px] relative overflow-hidden rounded-md"
          >
            {catToCompare?.url && (
              <Image
                src={catToCompare.url}
                alt="cat To Compare"
                fill
                className="object-cover cursor-pointer"
                unoptimized
              />
            )}
          </button>
        </li>
      </ul>
      <div className="flex items-center justify-between bg-white rounded-tl-2xl rounded-br-2xl p-4 border border-gray-300 my-6">
        <div className="text-md font-medium">
          Matchs joués: <span className="text-indigo-500">{rounds}</span>
        </div>
        <button
          onClick={() => ""}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium  px-4 py-2 rounded-lg transition cursor-pointer"
        >
          Voir les résultats
        </button>
      </div>
    </div>
  );
}
