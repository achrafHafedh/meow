"use client";

import { useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";
import { initStore } from "@/store/catsSlice";
import QuestionAnswer from "@/components/QuestionAnswer/QuestionAnswer";
import Welcome from "@/components/Welcome/Welcome";
import { addScoreToCats } from "@/lib/array";
import { Cat } from "@/types";

type Props = {
  cats: Cat[];
};

export default function CatsWrapper({ cats }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initStore(addScoreToCats(cats)));
  }, []);

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <Welcome
        title="Bienvenue sur Meow !"
        text="À vous de jouer : choisissez votre Meow préféré !"
      />
      <QuestionAnswer question="Quel Meow mérite la couronne ? Votez maintenant !" />
    </div>
  );
}
