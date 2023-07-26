import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 56px;

  padding: 32px 160px;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 1.25rem;
    line-height: 130%;
    text-align: left;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  span {
    font-size: 1rem;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 12px;
`

const ITEM_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  baseText: 'base-text',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const IconItem = styled.div<ItemProps>`
  display: flex;
  padding: 8px 8px;
  border-radius: 999px;
  color: ${(props) => props.theme['white']};

  width: 32px;
  height: 32px;

  background: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 20px;
`
