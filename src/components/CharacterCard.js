import React from 'react'
import { Link } from 'react-router-dom'
import { CardDiv, GreyP, LeftMarginTextDiv, EpisodeLinkDiv, GreyLink, GreyHRCard} from './StyledComps'


export default function CharacterCard (props) {
  const {character} = props
  return (
    <CardDiv>
      {console.log(character)}
      <img src={character.image} alt={`${character.name}`} />
      <LeftMarginTextDiv>
        <h3>{character.name}</h3>
        <GreyP>{`${character.species} ${character.status}`}</GreyP>
        <p>{`Location: ${character.location.name}`}</p>
        <p>{`Origin: ${character.origin.name}`}</p>
      </LeftMarginTextDiv>
        <GreyHRCard/>
      <EpisodeLinkDiv>
        <img src={require(`../assets/episode-icon.png`)} alt="episode-icon" />
        <GreyLink >Episodes</GreyLink>
      </EpisodeLinkDiv>
    </CardDiv>
  )
}
