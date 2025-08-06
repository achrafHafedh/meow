import QuestionAnswer from "@/components/QuestionAnswer/QuestionAnswer";
import Welcome from "@/components/Welcome/Welcome";

type Props = {
  cats: any;
};

export default function CatsWrapper({ cats }: Props) {
  console.log({ cats });
  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <Welcome
        title="Bienvenue sur Meow !"
        text="À vous de jouer : choisissez votre Meow préféré !"
      />
      <QuestionAnswer
        question="Quel Meow mérite la couronne ? Votez maintenant !"
        answer={cats}
      />
    </div>
  );
}
