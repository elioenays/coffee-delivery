import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 4px;

  min-width: 368px;
`

export const Info = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 8px;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;
  color: ${(props) => props.theme['purple']};

  border: none;

  padding: 0 8px;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-size: 0.75rem;
  }
`

export const ItemPrice = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: bold;
  font-size: 1rem;
`
