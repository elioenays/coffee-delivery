import { styled } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 40px 40px;
`

export const AddressBox = styled.div`
  display: flex;

  gap: 8px;

  color: ${(props) => props.theme['yellow-dark']};
`

export const AddressHeader = styled.div`
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;

  input {
    display: flex;

    padding: 12px;

    border: none;
    border-radius: 4px;

    outline-color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['base-input']};

    &::-webkit-input-placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const NumberAndComplement = styled.div`
  display: flex;
  gap: 12px;

  input {
    width: 50%;
  }
`

export const CityInfo = styled.div`
  display: flex;
  gap: 12px;
`

export const UF = styled.input`
  max-width: 3.75rem;
`
