"use client"
import ButtonAddSuperHero from "@/components/ButtonAddSuperHero";
import ListSuperHeroes from "@/components/ListSuperHeroes";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams ? searchParams.get("search") : "";

  return (
    <div>
      <ListSuperHeroes search={search} />
      <ButtonAddSuperHero />
    </div>
  );
}
