import styled from 'styled-components';

export const CardG = styled.li`
filter: grayscale(100%);
background: #f0f0f0;
margin: 3.5vw;
padding: 2vw;
list-style-type: none;
border-radius: 20px;
&:hover {
    filter: grayscale(0%);
    border-radius: 58px;
    box-shadow:  8px 8px 16px #5c5c5c,
    -8px -8px 16px #ffffff;
    transform: translate(-6px, -6px);
    }  
`;

export const CardGTitle = styled.h2`
    font-size: 1.5rem;
    color: brown;
     ${CardG}:hover & {
        color: green;
    
    
`;

export const GamesP = styled.p`

    font-size: 1.0rem;
    border-radius: 6px;
    padding: 10px;
    border: 2px solid ${props => props.theme.main}
`;

export const Thumbnail = styled.div`
    width: 100%;
    overflow: hidden;
    justify-content: center;
    border-radius: 10%;
`;
export const Image = styled.img`
    width: 360px;
    
`;
export const ShowMore = styled.button`
padding: 2px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
  
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;