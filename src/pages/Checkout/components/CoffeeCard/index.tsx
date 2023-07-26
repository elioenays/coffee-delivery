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

import Expresso from '../../../../utils/coffee/assets/Expresso.svg'

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <Info>
        <img src={Expresso} />
        <Details>
          <span>Expresso Tradicional</span>
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
      <ItemPrice>R$ 9,90</ItemPrice>
    </CoffeeCardContainer>
  )
}
