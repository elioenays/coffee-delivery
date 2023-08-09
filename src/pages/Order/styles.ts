import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  padding: 94px 160px;

  display: flex;
  flex-direction: column;

  gap: 40px;

  strong {
    color: ${(props) => props.theme['base-text']};
  }
`

export const OrderTitle = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: bold;
  }
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-family: 'Roboto';
    font-weight: 400;
  }
`

export const OrderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: start;

  padding: 40px;

  border-radius: 6px 36px;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
`

const ICON_COLORS = {
  purple: 'purple',
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
} as const

interface IconProps {
  variant: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  width: 32px;
  height: 32px;

  background: ${(props) => props.theme[ICON_COLORS[props.variant]]};

  color: ${(props) => props.theme.white};

  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Local = styled.div`
  display: flex;
  gap: 12px;

  font-size: 1rem;

  span {
    max-width: 354px;
  }
`

export const Time = styled.div`
  display: flex;
  gap: 12px;
`
export const TimeInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Payment = styled.div`
  display: flex;
  gap: 12px;
`
export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
`
