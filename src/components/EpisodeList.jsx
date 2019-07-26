import React, { useEffect, useState } from 'react';
import axios from "axios"
import EpisodeCard from './EpisodeCard'
import { LocationGrid } from './StyledComps'

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
        console.log("hitting the server")
        console.log(response.data)
        setEpisodes(response.data.results)
    })
    }, [])

    return (
        <LocationGrid>
        {episodes === [] ? <h1>Loading Episodes...</h1> :
            episodes.map((episode, index) => <EpisodeCard episode={episode} key={index} />)
        }
        </LocationGrid>
    )

}
