import React from 'react'
import { LocationCardDiv, GreyHR, ResidentDiv, HRResDiv } from './StyledComps'

export default function EpisodeCard (props) {
    const {episode} = props

    return (
        <LocationCardDiv>
            <h3>{episode.name}</h3>
            <p>{`${episode.air_date}`}</p>
            <HRResDiv>
            <GreyHR/>
            <ResidentDiv>
                <p>{`${episode.characters.length} characters`}</p>
            </ResidentDiv>
            </HRResDiv>
        </LocationCardDiv>
        
    )
}
