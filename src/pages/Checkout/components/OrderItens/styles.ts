import { styled } from 'styled-components'

export const OrderItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const OrderItensBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px 6px 44px;

  padding: 40px 40px;

  gap: 24px;

  hr {
    height: 1px;
    background: ${(props) => props.theme['base-button']};
    border: none;
  }
`
