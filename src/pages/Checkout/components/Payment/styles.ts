import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 40px 40px;
`

export const PaymentBox = styled.div`
  display: flex;

  gap: 8px;

  color: ${(props) => props.theme['purple']};
`

export const PaymentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 2px;

  :nth-child(1) {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  :nth-child(2) {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;

  button {
    color: ${(props) => props.theme['purple']};
    height: 51px;
    width: 178px;

    background: ${(props) => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 12px;
    padding: 16px;

    border: none;
    border-radius: 6px;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }
`
