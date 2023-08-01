import { styled } from 'styled-components'

export const CoofeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  max-width: 16rem;

  border-radius: 6px 36px 6px 36px;

  padding: 0 24px;

  img {
    width: 120px;
    height: 120px;

    top: -20px;
    position: relative;
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};

    margin-bottom: 33px;
  }
`

export const Title = styled.span`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: bold;

  margin-bottom: 8px;
`

export const TagBox = styled.label`
  background: ${(props) => props.theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 50px;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 130%;
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  margin-top: 12px;
  margin-bottom: 16px;

  padding: 4px 8px;
`

export const Buy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 38px;

  margin: 0px 24px 20px 24px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`

export const Shop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: none;

  cursor: pointer;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple']};
  }

  svg {
    color: ${(props) => props.theme['white']};
  }
`

export const Real = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto';
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
`

export const Quantity = styled.span`
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
  font-weight: 400;
`
export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 38px;

  background: ${(props) => props.theme['base-button']};

  padding: 8px;

  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple']};
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
