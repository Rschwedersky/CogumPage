import styled from 'styled-components';

export const CardG = styled.li`
bbackground: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: auto;
    
    padding: 1rem;
    list-style-type: none;
    border-radius: 20px;
`;

export const CardGTitle = styled.h2`
    font-size: 1.5rem;
    
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
`;
export const Image = styled.img`
    width: 360px;
    border-radius: 10%;
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