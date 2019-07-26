import React, { useEffect, useState } from 'react';
import axios from "axios"
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'


export default function CharacterList(props) {
  const { searchParams, setSearchParams } = props
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    let url = searchParams === "" ? `https://rickandmortyapi.com/api/character/` :
      `https://rickandmortyapi.com/api/character/?name=${searchParams}`
    axios.get(url)
    .then(response => {
      console.log("hitting the server")
      setCharacters(response.data.results)
    })
    .catch(err => console.log(err))
  }, [searchParams])

  return (
    <div>
      <SearchForm onSearch={setSearchParams} queryType={"Character Name"}/>
      <section className='character-list grid-view'>
        {characters === [] ? <h1>Loading characters...</h1> :
          characters.map((character, index) => <CharacterCard character={character} key={index} />)
        }
      </section>
    </div>
  )
  
}
