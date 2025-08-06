import React from "react";
import Image from "next/image";
import Link from "next/link";

type QuestionAnswerProps = {
  question: string;
  answer: any;
};

export default function QuestionAnswer({
  question,
  answer,
}: QuestionAnswerProps) {
  return (
    <div className="pt-10">
      <div className="text-lg">{question}</div>
      <ul className="inline-grid grid-cols-3 gap-4 mt-3">
        {answer.map((item: any, key: number) => (
          <li
            key={key}
            className="border border-gray-300 mr-5 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:border-gray-400 duration-300"
          >
            <Link href={`/offers/${item.id}`}>
              <div data-testid={item.url} className="p-3">
                <div className="w-[120px] h-[80px] relative overflow-hidden rounded-md">
                  <Image
                    src={item?.url || ""}
                    alt={item.url}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
