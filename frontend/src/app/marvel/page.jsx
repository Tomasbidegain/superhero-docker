"use client"
import ListSuperHeroes from "@/components/ListSuperHeroes";
import { useSearchParams } from 'next/navigation';

export default function SuperHeroMarvel( ) {

  const searchParams = useSearchParams();
 
  const search = searchParams ? searchParams.get('search') : "";

  return (
    <>
      <ListSuperHeroes search={search} casa={'Marvel'}/>
    </>
  );
}
