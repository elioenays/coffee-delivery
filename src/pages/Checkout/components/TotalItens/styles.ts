import { styled } from 'styled-components'

export const TotalItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }

  :nth-child(3) {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }
`
