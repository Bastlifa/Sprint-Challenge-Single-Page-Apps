import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardDiv = styled.div`
    border: 2px solid gray;
    border-radius: 8px;
    margin: 10px;
`;

export const GreyP = styled.p`
    color: gray;
    margin-top: -10px;
`;

export const LeftMarginTextDiv = styled.div`
    margin-left: 10px;
`;

export const EpisodeLinkDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding-bottom: 10px;
`;

export const GreyLink = styled(Link)`
    color: gray;
`;

export const LocationGrid = styled.div`
    margin-top: 20px;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`;

export const LocationCardDiv = styled.div`
    width: 300px;
    border: 2px solid lightgrey;
    border-radius: 8px;
    padding: 10px;
`;

export const GreyHR = styled.hr`
    border-color: #E1E1E1;
    border-top: none;
    width: 100%;
    margin-left: -10px;
`;

export const HRResDiv = styled.div`
    display: flex;

`;

export const ResidentDiv = styled.div`
    width: 150px;
    padding-top: 6px;
    padding-left: 6px;
    margin-right: -10px;
    margin-bottom: -10px;
    background-color: lightgrey;
    border-top-left-radius: 8px;
`;