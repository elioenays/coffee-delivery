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
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CoffeeCardProps {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export default function CoffeeCard({
  imageUrl,
  name,
  price,
  id,
  quantity,
}: CoffeeCardProps) {
  const { removeItemFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext)

  function handleRemoveItemFromCart() {
    removeItemFromCart(id)
  }

  function handleIncreaseQuantity() {
    increaseQuantity(id)
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(id)
  }

  return (
    <CoffeeCardContainer>
      <Info>
        <img src={imageUrl} />
        <Details>
          <span>{name}</span>
          <Actions>
            <Counter>
              <Minus
                onClick={handleDecreaseQuantity}
                size={14}
                weight='bold'
              />
              <span>{quantity}</span>
              <Plus
                onClick={handleIncreaseQuantity}
                size={14}
                weight='bold'
              />
            </Counter>
            <Remove onClick={handleRemoveItemFromCart}>
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
