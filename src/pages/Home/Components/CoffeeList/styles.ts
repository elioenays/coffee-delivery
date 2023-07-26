import { styled } from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding: 2rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 3.25rem;

  flex-wrap: wrap;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2rem;

  max-width: 70rem;
  flex-wrap: wrap;
`
