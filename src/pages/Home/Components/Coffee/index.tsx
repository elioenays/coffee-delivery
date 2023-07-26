import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  Actions,
  Buy,
  CoofeeContainer,
  Counter,
  Price,
  Quantity,
  Real,
  Shop,
  Tag,
  Title,
} from './style'

import Expresso from '../../../../assets/Expresso.svg'

export default function Coffee() {
  return (
    <CoofeeContainer>
      <img src={Expresso} />
      <Tag>TRADICIONAL</Tag>
      <Title>Expresso Tradicional</Title>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Buy>
        <Price>
          <Real>R$</Real> 9.90
        </Price>
        <Actions>
          <Counter>
            <button>
              <Minus
                size={14}
                weight='bold'
              />
            </button>
            <Quantity>1</Quantity>
            <button>
              <Plus
                size={14}
                weight='bold'
              />
            </button>
          </Counter>
          <Shop>
            <ShoppingCart
              weight='fill'
              size={22}
            />
          </Shop>
        </Actions>
      </Buy>
    </CoofeeContainer>
  )
}
