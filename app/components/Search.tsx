'use client'

import React, {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`)
    }
    return (
    <form className='w-50 flex justify-center md:justify-between' onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='bg-white p-2 w-80 text-xl text-black rounded-xl'
      placeholder='Search'/>

      <button className="bg-blue-500 ml-5 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md transition duration-300">Search</button>
    </form>
  )
}
