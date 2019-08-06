import React from 'react'
import { LocationCardDiv, GreyHR, ResidentDiv, HRResDiv } from './StyledComps'
export default function LocationCard (props) {
  const {location} = props
  // image={image}
  return (
    <LocationCardDiv>
      <h3>{location.name}</h3>
      <p>{`${location.type}-${location.dimension}`}</p>
      <HRResDiv>
        <GreyHR/>
        <ResidentDiv>
          <p>{`${location.residents.length} residents`}</p>
        </ResidentDiv>
      </HRResDiv>
    </LocationCardDiv>
  )
}
