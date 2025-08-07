export async function getCats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
