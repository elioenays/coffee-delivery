import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 160px;

  nav {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['yellow-light']};

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  height: 2.375rem;
`
export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  height: 38px;

  background: ${(props) => props.theme['purple-light']};

  padding: 8px 8px;
  border-radius: 6px;

  color: ${(props) => props.theme['purple']};
  font-size: 0.875rem;
  line-height: 1.3;
`

export const Counter = styled.span`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};

  font-weight: bold;
  letter-spacing: -6%;
  font-size: 0.75rem;

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;

  position: relative;
  bottom: 16px;
  left: 60px;
`
