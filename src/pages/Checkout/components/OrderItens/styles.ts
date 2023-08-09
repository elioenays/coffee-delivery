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

  min-width: 28rem;

  border-radius: 6px 44px 6px 44px;

  padding: 40px 40px;

  gap: 24px;

  hr {
    height: 1px;
    background: ${(props) => props.theme['base-button']};
    border: none;
  }
`

export const CofeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`

export const ConfirmOrder = styled.button`
  color: ${(props) => props.theme['white']};

  background: ${(props) => props.theme['yellow']};

  border: none;
  border-radius: 6px;

  padding: 12px 8px;

  font-weight: bold;
  font-size: 0.875rem;
  line-height: 160%;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
