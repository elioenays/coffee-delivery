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
  TagContainer,
  Title,
} from './style'

import { CoffeeProps } from '../../../../utils/coffee/coffees'

export default function Coffee({
  description,
  imageUrl,
  name,
  price,
  tags,
}: CoffeeProps) {
  return (
    <CoofeeContainer>
      <img src={imageUrl} />
      <TagContainer>
        {tags.map((tag) => {
          return <Tag>{tag}</Tag>
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
