"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useAppSelector } from "@/store/hooks";
import { Cat } from "@/types";
import { sortCatsByScore } from "@/lib/array";

export default function Results() {
  const listCat = useAppSelector((state) => state.cats.list);
  const [sortedCats] = useState(sortCatsByScore(listCat));

  return (
    <div className="container max-w-6xl mx-auto py-16 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedCats.map((cat: Cat, index: number) => (
          <li
            key={cat.id}
            className="bg-white border border-gray-200 relative shadow-md p-6 rounded-2xl transition-transform duration-300 hover:scale-105 flex flex-col items-center"
          >
            <span className="absolute -top-3 -left-3 bg-indigo-500 text-white text-xs w-7 h-7 flex items-center justify-center rounded-full font-bold shadow-md">
              {index + 1}
            </span>
            <div className="w-full h-[200px] relative overflow-hidden rounded-xl mb-4">
              <Image
                src={cat.url}
                alt={`Cat ${cat.id}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Chat: {cat.id}</p>
              <p className="text-sm font-semibold text-indigo-600">
                Score: {cat.score}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
