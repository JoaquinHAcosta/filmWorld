import { Genre } from '@/types/Genre'
import React from 'react'

export const GenreButton = ({ name, id }: Genre) => {
  return (
    <button key={id} className="text-white bg-red-600 rounded-3xl m-1 px-2">
      {name}
    </button>
  )
}
