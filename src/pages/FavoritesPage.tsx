import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavouritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)

  if (favorites.length === 0) return <p className='text-center'>No Items.</p>

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
      {favorites.map(favorite => (
        <li key={favorite}>
          <a href={favorite}>{favorite}</a>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default FavouritesPage