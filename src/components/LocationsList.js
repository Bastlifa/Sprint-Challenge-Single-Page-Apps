import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'
import axios from "axios"
import { LocationGrid } from './StyledComps'
import SearchForm from './SearchForm'

export default function LocationsList(props) {
    const { searchParams, setSearchParams } = props
    const [locations, setLocations] = useState([])

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        let url = searchParams === "" ? `https://rickandmortyapi.com/api/location/` :
        `https://rickandmortyapi.com/api/location/?type=${searchParams}`

        axios.get(url)
        .then(response => {
            console.log("hitting the server")
            
            setLocations(response.data.results)
        })
    }, [searchParams])

    return (
        <div>
            <SearchForm onSearch={setSearchParams} queryType={"Location Type"}/>
            <LocationGrid>
            {locations === [] ? <h1>Loading locations...</h1> :
                locations.map((location, index) => <LocationCard location={location} key={index} />)
            }
            </LocationGrid>
        </div>
    )
}




