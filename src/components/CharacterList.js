import React, { useEffect, useState } from 'react';
import axios from "axios"
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results)
    })
  }, [])

  return <section className='character-list grid-view'>
      {characters === [] ? <h1>Loading characters...</h1> :
        characters.map((character, index) => <CharacterCard character={character} key={index} />)
      }
    </section>

}
