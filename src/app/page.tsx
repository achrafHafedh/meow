import CatsWrapper from "@/components/CatsWrapper/CatsWrapper";
import { getCats } from "@/lib/getCats";

export default async function CatsPages() {
  const cats = await getCats();

  return <CatsWrapper cats={cats.images} />;
}
