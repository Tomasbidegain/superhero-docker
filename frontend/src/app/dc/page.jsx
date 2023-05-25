"use client"
import ListSuperHeroes from "@/components/ListSuperHeroes";
import { useSearchParams } from 'next/navigation';

export default function SuperHeroDc() {

  const searchParams = useSearchParams();
 
  const search = searchParams ? searchParams.get('search') : "";

  return (
    <>
      <ListSuperHeroes search={search} casa={'DC'}/>
    </>
  );
}
