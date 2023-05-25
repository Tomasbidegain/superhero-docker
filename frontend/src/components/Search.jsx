"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Search () {

  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchValue)
    if (searchValue){
      router.push(`${window.location.pathname}?search=${encodedSearchQuery}`)
    }
    else{
      router.push('')
    }
  }

  return (
    <form className="form-control w-full" onSubmit={(e) => {onSearch(e)}}>
        <input
          type="text"
          id="filter"
          placeholder="Search"
          className="input input-bordered"
          onChange={(e) => setSearchValue(e.target.value)}
        />
    </form>
  )
}