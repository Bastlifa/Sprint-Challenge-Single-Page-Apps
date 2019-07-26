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