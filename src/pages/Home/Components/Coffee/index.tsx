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
  TagBox,
  TagContainer,
  Title,
} from './style'
import { Tag } from '../../../../utils/coffee/coffees'

export interface CoffeeProps {
  id?: number
  name: string
  tags: Tag[]
  imageUrl: string
  description: string
  price: string
  handleAddItenToCart: () => void
}

export default function Coffee({
  description,
  imageUrl,
  name,
  price,
  tags,
  handleAddItenToCart,
}: CoffeeProps) {
  return (
    <CoofeeContainer>
      <img src={imageUrl} />
      <TagContainer>
        {tags.map((tag) => {
          return <TagBox key={tag}>{tag}</TagBox>
        })}
      </TagContainer>
      <Title>{name}</Title>
      <p>{description}</p>
      <Buy>
        <Price>
          <Real>R$</Real> {price}
        </Price>
        <Actions>
          <Counter>
            <Minus
              size={14}
              weight='bold'
            />

            <Quantity>1</Quantity>

            <Plus
              size={14}
              weight='bold'
            />
          </Counter>
          <Shop>
            <ShoppingCart
              weight='fill'
              size={22}
              onClick={handleAddItenToCart}
            />
          </Shop>
        </Actions>
      </Buy>
    </CoofeeContainer>
  )
}
