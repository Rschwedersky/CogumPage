import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    margin: 0;
`;

export const CardGrid = styled.ul`
    margin: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;  
`;
