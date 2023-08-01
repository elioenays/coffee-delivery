import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  Actions,
  CoffeeCardContainer,
  Counter,
  Details,
  Info,
  ItemPrice,
  Remove,
} from './styles'

interface CoffeeCardProps {
  id?: number
  name: string
  imageUrl: string
  price: string
}

export default function CoffeeCard({ imageUrl, name, price }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <Info>
        <img src={imageUrl} />
        <Details>
          <span>{name}</span>
          <Actions>
            <Counter>
              <Minus
                size={14}
                weight='bold'
              />
              <span>1</span>
              <Plus
                size={14}
                weight='bold'
              />
            </Counter>
            <Remove>
              <Trash
                size={16}
                weight='bold'
              />
              <span>REMOVER</span>
            </Remove>
          </Actions>
        </Details>
      </Info>
      <ItemPrice>R$ {price}</ItemPrice>
    </CoffeeCardContainer>
  )
}
