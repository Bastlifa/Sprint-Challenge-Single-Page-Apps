import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'
import axios from "axios"
import { LocationGrid } from './StyledComps'

export default function LocationsList() {
    
    const [locations, setLocations] = useState([])

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log("hitting the server")
            setLocations(response.data.results)
        })
    }, [])

        return <LocationGrid>
        {locations === [] ? <h1>Loading locations...</h1> :
            locations.map((location, index) => <LocationCard location={location} key={index} />)
        }
        </LocationGrid>
}




