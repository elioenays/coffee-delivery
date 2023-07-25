import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 160px;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  span {
    font-size: 1rem;
  }
`
const ITEM_COLORS = {
  yellow: '#DBAC2C',
  purple: '#8047F8',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const Item = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 8px;

  background: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
`
